import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MockTableService } from './services/mock-table.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDisplayComponent } from './components/table-display/table-display.component';


// const appRoutes: Routes =[
//   {path:'', component: TableContainerComponent},
//   {path:'table', component: TableComponent},
//   {path:'about', component: AboutComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    AboutComponent,
    TableContainerComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [MockTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
