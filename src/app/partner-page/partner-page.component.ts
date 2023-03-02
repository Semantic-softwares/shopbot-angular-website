import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MerchantsService } from '../services/merchant.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {
  form: FormGroup;
  submitting: Boolean

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    private merchant: MerchantsService
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      gender: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, { validator: this.checkPasswords });
    
  }

  submitForm() {
    if (this.form.valid) {
      this.submitting = true
      this.merchant.createMerchant(this.form.getRawValue()).pipe(finalize(() => this.submitting = false))
      .subscribe((data: any) => {
          if (data.err && data.err.errmsg.startsWith('E11000 duplicate key error collection')) {
            alert("Email or phone number already exists")
          }else{
            const merchant_id = data['_doc']["_id"];
            this.router.navigate(['create-store', merchant_id])
            window.scrollTo(0, 0)  
         }
        }
    );
    }
  }

  checkPasswords(group: FormGroup) {
    let password = group.controls["password"].value;
    let confirmPassword = group.controls["confirmPassword"].value;
    return password === confirmPassword ? null : { notSame: true };
  }

  get name() { return this.form.get('name'); }
  
  get email() { return this.form.get('email'); }

  get number() { return this.form.get('phoneNumber')}

  get gender() { return this.form.get('gender')}

  get password() { return this.form.get('password')}

  get confirmPassword() { return this.form.get('confirmPassword')} 
}