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
  location: Object

  constructor(private fb: FormBuilder, private http: HttpClient, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const merchantIdFromRoute = this.route.snapshot.params['merchantId'];

    this.merchantId = merchantIdFromRoute
    
    console.log(this.merchantId)

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      country: ['Nigeria', Validators.required],
      category: ['Restaurants', Validators.required],
      address: ['', Validators.required],
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
      this.location = this.form.value["address"]["geoLocation"]
      delete this.form.value["address"]
      console.log({...this.form.value, ...{ merchant : this.merchantId , location: this.location }})
      this.http.post('https://shopbot.ngrok.io/stores/web', {...this.form.value, ...{ owner : this.merchantId , location: this.location }}).subscribe((data) => console.log(data));
    }
  }
}


