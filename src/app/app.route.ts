import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestPasswordComponent } from './reset-password/rest-password.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

export const routes: Routes = [
    { path:'', redirectTo:'login', pathMatch: 'full'},
    { path:'login', component: LoginComponent },
    { path:'dashboard', component: DashboardComponent },
    { path:'resetpassword', component: RestPasswordComponent },
    { path:'orderlist', component: OrderlistComponent },
    {path: '**', component: LoginComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);