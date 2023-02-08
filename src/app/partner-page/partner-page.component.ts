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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['male', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.http.post('https://shopbot.ngrok.io/merchants', this.form.value)
        .subscribe((data: any) => {
          const merchant_id = data["$__"]["_id"];
          this.router.navigate(['create-store', merchant_id])
        });
    }
  }
}