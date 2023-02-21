import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import {AgmCoreModule} from '@agm/core';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { RiderPageComponent } from './rider-page/rider-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutFooterComponent } from './about-footer/about-footer.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucesssComponent } from './sucesss/sucesss.component';
import { MerchantsService } from './services/merchant.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutUsPageComponent,
    PolicyPageComponent,
    VerifyPageComponent,
    PartnerPageComponent,
    RiderPageComponent,
    NotFoundPageComponent,
    FooterComponent,
    HeaderComponent,
    AboutHeaderComponent,
    AboutFooterComponent,
    CreateStoreComponent,
    SucesssComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTzycQbUj9vWxnq8VgI7pzmYxdEo6t8to',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [MerchantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
