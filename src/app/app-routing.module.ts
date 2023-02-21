import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { SucesssComponent } from './sucesss/sucesss.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';

const routes: Routes = [
  {path: "", component: IndexPageComponent},
  {path: "about-us", component: AboutUsPageComponent},
  {path: "privacy-policy", component: PolicyPageComponent},
  {path: "verify", component: VerifyPageComponent},
  {path: "create-merchant", component: PartnerPageComponent},
  {path: "create-store/:merchantId", component: CreateStoreComponent},
  {path: "success", component: SucesssComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

