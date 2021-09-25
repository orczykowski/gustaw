import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoodCalculatorComponent} from './features/food-calculator/food-calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {BlogComponent} from "./features/blog/blog.component";
import { PrintResultComponent } from './features/food-calculator/print-result/print-result.component';
import { ValidationErrorComponent } from './features/food-calculator/validation-error/validation-error.component';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';
import { OrganizationInfoComponent } from './features/organizations/organization-info/organization-info.component';

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
