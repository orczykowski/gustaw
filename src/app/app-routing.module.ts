import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './features/blog/blog.component';
import {FoodCalculatorComponent} from './features/calculator/food-calculator.component';
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {SafeBalconyComponent} from './features/blog/articles/safe-balcony/safe-balcony.component';
import {DietComponent} from './features/blog/articles/diet/diet.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'kalkulator', component: FoodCalculatorComponent},
  {path: 'warto-wspierac', component: OrganizationsComponent},

  {path: 'blog/kocie-terytorium', component: SafeBalconyComponent},
  {path: 'blog/dieta', component: DietComponent},
  {path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
