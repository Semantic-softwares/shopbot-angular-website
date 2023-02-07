import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutFooterComponent } from './about-footer/about-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AboutUsPageComponent,
    PolicyPageComponent,
    VerifyPageComponent,
    ServicePageComponent,
    PartnerPageComponent,
    TeamPageComponent,
    PricePageComponent,
    FaqPageComponent,
    NotFoundPageComponent,
    FooterComponent,
    HeaderComponent,
    AboutHeaderComponent,
    AboutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
