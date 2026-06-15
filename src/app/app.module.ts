import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoodCalculatorComponent} from './features/calculator/food-requirement-calculator/food-calculator.component';
import {AgeCalculatorComponent} from './features/calculator/age-calculator/age-calculator.component';
import {BcsCalculatorComponent} from './features/calculator/bcs-calculator/bcs-calculator.component';
import {WaterCalculatorComponent} from './features/calculator/water-calculator/water-calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {BlogComponent} from './features/blog/blog.component';
import {PrintResultComponent} from './features/calculator/food-requirement-calculator/print-result/print-result.component';
import {ValidationErrorComponent} from './features/calculator/food-requirement-calculator/validation-error/validation-error.component';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {OrganizationInfoComponent} from './features/organizations/organization-info/organization-info.component';
import {ArticleLinkComponent} from './features/blog/article-link/article-link.component';
import {SafeBalconyComponent} from './features/blog/articles/safe-balcony/safe-balcony.component';
import {DietComponent} from './features/blog/articles/diet/diet.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CatAtHomePositivesComponent } from './features/blog/articles/cat-at-home-positives/cat-at-home-positives.component';
import {CatSoundsComponent} from './features/blog/articles/cat-sounds/cat-sounds.component';
import {BmiCalculatorComponent} from './features/calculator/bmi-calculator/bmi-calculator.component';
import {CalculatorsListComponent} from './features/calculator/calculators-list/calculators-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodCalculatorComponent,
    AgeCalculatorComponent,
    BcsCalculatorComponent,
    WaterCalculatorComponent,
    BmiCalculatorComponent,
    CalculatorsListComponent,
    BlogComponent,
    OrganizationsComponent,
    PrintResultComponent,
    ValidationErrorComponent,
    WelcomePageComponent,
    OrganizationInfoComponent,
    SafeBalconyComponent,
    ArticleLinkComponent,
    DietComponent,
    CatAtHomePositivesComponent,
    CatSoundsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
