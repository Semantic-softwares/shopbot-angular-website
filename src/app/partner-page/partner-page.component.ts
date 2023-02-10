import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {
  form: FormGroup;
  submitting: Boolean

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

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
      console.log(this.form.value)
      this.http.post('https://shopbot.ngrok.io/merchants', this.form.value)
        .subscribe((data: any) => {
          //if (data.err && data.err.errmsg.startsWith('E11000 duplicate key error collection')) {
          //  alert("Email or phone number already exiss")
          //}else{
            const merchant_id = data["$__"]["_id"];
            this.router.navigate(['create-store', merchant_id])
            window.scrollTo(0, 0)  
          //}
        }
    );
    }
  }

  checkPasswords(group: FormGroup) {
    let password = group.controls["password"].value;
    let confirmPassword = group.controls["confirmPassword"].value;
    return password === confirmPassword ? null : { notSame: true };
  }
}