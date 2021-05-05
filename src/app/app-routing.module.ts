import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from "./features/blog/blog.component";
import {FoodCalculatorComponent} from "./features/food-calculator/food-calculator.component";
import {MediaComponent} from "./features/media/media.component";
import {OrganizationsComponent} from "./features/organizations/organizations.component";

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'calculator', component: FoodCalculatorComponent},
  {path: 'media', component: MediaComponent},
  {path: 'organizations', component: OrganizationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
