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
import {ContentManagementComponent} from './content-management/content-management.component';
import { BrandProtectionComponent } from './brand-protection/brand-protection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { CompanyComponent } from './company/company.component';


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
  {path:'contentManagement',component:ContentManagementComponent},
  {path:'brandProtection',component:BrandProtectionComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'customerService',component:CustomerServiceComponent},
  {path:'company',component:CompanyComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
