import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  form: FormGroup;
  merchantId: string

  constructor(private fb: FormBuilder, private http: HttpClient, private router : Router, private route: ActivatedRoute,) {}

  ngOnInit(): void {

    const merchantIdFromRoute = this.route.snapshot.params['merchantId'];

    this.merchantId = merchantIdFromRoute

    console.log(this.merchantId)

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      country: ['Nigeria', Validators.required],
      category: ['Restaurants', Validators.required],
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        placeName: ['', Validators.required],
        placeNumber: ['', Validators.required],
      })
    });    
  }
 
  submitForm() {
    if (this.form.valid) {
      console.log({...this.form.value, ...{ merchant_id : this.merchantId }})
      // this.http.post('api/endpoint', this.form.value).subscribe();
    }
  }
}
