import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableContainerComponent } from './components/table-container/table-container.component'
import { TableDisplayComponent } from './components/table-display/table-display.component';
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [  { path: '', component: TableContainerComponent },
  { path: 'table/:id', component: TableDisplayComponent }, // Define the route for table queries
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
