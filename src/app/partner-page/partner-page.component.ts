import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent {
  firstForm: FormGroup;
  secondForm: FormGroup;
  merchat_id = "";
  showFirstForm = true;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['male', Validators.required],
      password: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required],
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        placeName: ['', Validators.required],
        placeNumber: ['', Validators.required],
      })
    });

  }


  submitFirstForm() {
    if (this.firstForm.valid) {
      this.http.post('https://shopbot.ngrok.io/merchants', this.firstForm.value)
        .subscribe((data: any) =>{
            this.merchat_id = data["$__"]["_id"];
        });
      this.showFirstForm = false;
      window.scrollTo(0, 0);
    }
  }

  submitSecondForm() {
    if (this.secondForm.valid) {
      this.http.post('api/endpoint', this.secondForm.value).subscribe();
    }
  }

}