import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './features/blog/blog.component';
import {FoodCalculatorComponent} from './features/calculator/food-calculator.component';
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

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'kalkulator', component: FoodCalculatorComponent},
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
