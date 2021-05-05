import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoodCalculatorComponent} from './features/food-calculator/food-calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MediaComponent} from './features/media/media.component';
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {BlogComponent} from "./features/blog/blog.component";

@NgModule({
  declarations: [
    AppComponent,
    FoodCalculatorComponent,
    BlogComponent,
    MediaComponent,
    OrganizationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
