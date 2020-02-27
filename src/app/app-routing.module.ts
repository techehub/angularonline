import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CourselistComponent } from './courselist/courselist.component';


const routes: Routes = [

{path:"product", component:ProductListComponent},
{path: "courses", component:CourselistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
