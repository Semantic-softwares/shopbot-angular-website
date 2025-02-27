import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';


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
      this.http.post('https://shopbot-server.herokuapp.com/stores/web', this.form.getRawValue())
        .pipe(finalize(() => this.submitting = false))
        .subscribe(() => {
          this.router.navigate(['success'])
          window.scrollTo(0, 0);
        });
    }
  }

  getCategories() {
    this.http.get('https://shopbot-server.herokuapp.com/categories').subscribe((data: any) => {
      this.categories = data
    })
  }


  locationSelect(location: Location) {
    // this.form.patchValue({ location: { coordinates: [location.latitude, location.longitude] } })
  }

  get name() { return this.form.get('name'); }

  get description() { return this.form.get('description'); }

  get country() { return this.form.get('country'); }

  get category() { return this.form.get('category'); }

  get contact() { return this.form.get('contactInfo')}
  
  get email() { return this.contact?.get('email')}
  
  get phone() { return this.contact?.get('phone')}
  
  get placeName() { return this.contact?.get('placeName')}
  
  get placeNumber() { return this.contact?.get('placeNumber')}
  
}


