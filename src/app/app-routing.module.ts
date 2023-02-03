import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';

const routes: Routes = [
  {path: "", component: IndexPageComponent},
  {path: "about-us", component: AboutUsPageComponent},
  {path: "privacy-policy", component: PolicyPageComponent},
  {path: "verify", component: VerifyPageComponent},
  {path: "services", component: ServicePageComponent},
  {path: "partner", component: PartnerPageComponent},
  {path: "team", component: TeamPageComponent},
  {path: "pricing", component: PricePageComponent},
  {path: "faq", component: FaqPageComponent},
  {path: "404", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

