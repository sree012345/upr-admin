import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SerialNumbersComponent } from './serial-numbers/serial-numbers.component';
import { ProductComponent } from './product/product.component';
import { ImportloadComponent } from './importload/importload.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login',component:LoginComponent},
  {path:'serialNumber',component:SerialNumbersComponent},
  {path:'productDetails',component:ProductComponent},
  {path:'load',component:ImportloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
