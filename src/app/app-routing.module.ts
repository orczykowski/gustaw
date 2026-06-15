import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './features/blog/blog.component';
import {FoodCalculatorComponent} from './features/calculator/food-requirement-calculator/food-calculator.component';
import {AgeCalculatorComponent} from './features/calculator/age-calculator/age-calculator.component';
import {BcsCalculatorComponent} from './features/calculator/bcs-calculator/bcs-calculator.component';
import {WaterCalculatorComponent} from './features/calculator/water-calculator/water-calculator.component';
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {SafeBalconyComponent} from './features/blog/articles/safe-balcony/safe-balcony.component';
import {DietComponent} from './features/blog/articles/diet/diet.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment.prod';
import {
  CatAtHomePositivesComponent
} from './features/blog/articles/cat-at-home-positives/cat-at-home-positives.component';
import {CatSoundsComponent} from './features/blog/articles/cat-sounds/cat-sounds.component';
import {BmiCalculatorComponent} from './features/calculator/bmi-calculator/bmi-calculator.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'kalkulator', redirectTo: 'kalkulator/karma', pathMatch: 'full'},
  {path: 'kalkulator/karma', component: FoodCalculatorComponent},
  {path: 'kalkulator/wiek', component: AgeCalculatorComponent},
  {path: 'kalkulator/kondycja', component: BcsCalculatorComponent},
  {path: 'kalkulator/woda', component: WaterCalculatorComponent},
  {path: 'kalkulator/bmi', component: BmiCalculatorComponent},
  {path: 'warto-wspierac', component: OrganizationsComponent},
  {path: 'blog/kocie-terytorium', component: SafeBalconyComponent},
  {path: 'blog/dieta', component: DietComponent},
  {path: 'blog/kot-idealny-wspolokator', component: CatAtHomePositivesComponent},
  {path: 'blog/dlaczego-koty-mrucza', component: CatSoundsComponent},
  {path: 'blog', component: BlogComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
