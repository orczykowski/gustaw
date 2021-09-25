import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "./features/blog/blog.component";
import {FoodCalculatorComponent} from "./features/food-calculator/food-calculator.component";
import {OrganizationsComponent} from "./features/organizations/organizations.component";
import {WelcomePageComponent} from "./features/welcome-page/welcome-page.component";

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'calculator', component: FoodCalculatorComponent},
  {path: 'organizations', component: OrganizationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
