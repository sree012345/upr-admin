import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SerialNumbersComponent } from './serial-numbers/serial-numbers.component';
import { ProductComponent } from './product/product.component';
import { ImportloadComponent } from './importload/importload.component';
import { AuthenticScanComponent } from './authentic-scan/authentic-scan.component';
import { RecallComponent } from './recall/recall.component';
import { ServiceBulletinComponent } from './service-bulletin/service-bulletin.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login',component:LoginComponent},
  {path:'serialNumber',component:SerialNumbersComponent},
  {path:'productDetails',component:ProductComponent},
  {path:'load',component:ImportloadComponent},
  {path:'authentic',component:AuthenticScanComponent},
  {path:'recall',component:RecallComponent},
  {path:'serviceBulletin',component:ServiceBulletinComponent},
  {path:'main',component:MainComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
