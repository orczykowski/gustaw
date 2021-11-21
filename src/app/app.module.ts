import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoodCalculatorComponent} from './features/calculator/food-calculator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {BlogComponent} from "./features/blog/blog.component";
import {PrintResultComponent} from './features/calculator/print-result/print-result.component';
import {ValidationErrorComponent} from './features/calculator/validation-error/validation-error.component';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {OrganizationInfoComponent} from './features/organizations/organization-info/organization-info.component';
import {ArticleLinkComponent} from './features/blog/article-link/article-link.component';
import {SafeBalconyComponent} from "./features/blog/articles/safe-balcony/safe-balcony.component";
import {DietComponent} from "./features/blog/articles/diet/diet.component";

@NgModule({
  declarations: [
    AppComponent,
    FoodCalculatorComponent,
    BlogComponent,
    OrganizationsComponent,
    PrintResultComponent,
    ValidationErrorComponent,
    WelcomePageComponent,
    OrganizationInfoComponent,
    SafeBalconyComponent,
    ArticleLinkComponent,
    DietComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
