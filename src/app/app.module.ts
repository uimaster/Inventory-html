import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestPasswordComponent } from './reset-password/rest-password.component';
import { routing } from './app.route';
import { ChartsModule } from 'ng2-charts';

import {SidebarModule} from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RestPasswordComponent,
    NavbarComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
