import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
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
  categories: any[] = []
  submitting: Boolean

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.getCategories()
  }

  ngOnInit(): void {

    const merchantIdFromRoute = this.route.snapshot.params['merchantId'];

    this.merchantId = merchantIdFromRoute

    console.log(this.merchantId)



    this.form = this.fb.group({
      merchant: [merchantIdFromRoute, Validators.required],
      owner: [merchantIdFromRoute, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      country: ['Nigeria', Validators.required],
      category: [null, Validators.required],
      location: this.fb.group({
        type: 'Point',
        coordinates: []
      }),
      contactInfo: this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        phone: [null, Validators.required],
        placeName: [null, Validators.required],
        placeNumber: [null, Validators.required],
      })
    });
  }

  submitForm() {
    console.log(this.form.value)
    if (this.form.valid) {
      console.log(this.form.value)
      this.http.post('https://shopbot.ngrok.io/stores/web', this.form.getRawValue())
        .subscribe(() => {
          this.router.navigate(['success'])
          window.scrollTo(0, 0);
        });
    }
  }

  getCategories() {
    this.http.get('https://shopbot.ngrok.io/categories').subscribe((data: any) => {
      this.categories = data
    })
  }


  locationSelect(location: Location) {
    this.form.patchValue({ location: { coordinates: [location.latitude, location.longitude] } })
  }
}


