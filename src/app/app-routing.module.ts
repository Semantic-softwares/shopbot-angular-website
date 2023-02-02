import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { PolicyPageComponent } from './policy-page/policy-page.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';

const routes: Routes = [
  {path: "", component: IndexPageComponent},
  {path: "about-us", component: AboutUsPageComponent},
  {path: "privacy-policy", component: PolicyPageComponent},
  {path: "verify", component: VerifyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

