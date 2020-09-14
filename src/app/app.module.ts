import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SerialNumbersComponent } from './serial-numbers/serial-numbers.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddSerialNumberComponent } from './serial-numbers/add-serial-number/add-serial-number.component';
import { AdminloginService } from './services/Adminlogin.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpdateSerialNumberComponent } from './serial-numbers/update-serial-number/update-serial-number.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule,MatFormFieldControl } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule,MatPaginatorIntl} from '@angular/material/paginator';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DelectProductComponent } from './product/delect-product/delect-product.component';
import { DeleteSerialNumberComponent } from './serial-numbers/delete-serial-number/delete-serial-number.component';
import { PopupmessageComponent } from './popupmessage/popupmessage.component';
import { ImportloadComponent } from './importload/importload.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AuthenticScanComponent } from './authentic-scan/authentic-scan.component';
import { RecallComponent } from './recall/recall.component';
import { ServiceBulletinComponent } from './service-bulletin/service-bulletin.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponent } from './footer/footer.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { BrandProtectionComponent } from './brand-protection/brand-protection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { CompanyComponent } from './company/company.component';
import { SendPushNotificationComponent } from './send-push-notification/send-push-notification.component';

import { MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { AdminAdduserComponent } from './admin-adduser/admin-adduser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { SerialNumberComponent } from './importload/serial-number/serial-number.component';
import { ImportRecallComponent } from './importload/import-recall/import-recall.component';
import { ImportServiceBulletinComponent } from './importload/import-service-bulletin/import-service-bulletin.component';
import { ImportDocumentAndLinkComponent } from './importload/import-document-and-link/import-document-and-link.component';
import { ImportBrandProtectionComponent } from './importload/import-brand-protection/import-brand-protection.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    SerialNumbersComponent,
    AddSerialNumberComponent,
    UpdateSerialNumberComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DelectProductComponent,
    DeleteSerialNumberComponent,
    PopupmessageComponent,
    ImportloadComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    AuthenticScanComponent,
    RecallComponent,
    ServiceBulletinComponent,
    MainComponentComponent,
    FooterComponent,
    ContentManagementComponent,
    BrandProtectionComponent,
    ContactUsComponent,
    CustomerServiceComponent,
    CompanyComponent,
    SendPushNotificationComponent,
    AdminAdduserComponent,
    DashboardComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    SerialNumberComponent,
    ImportRecallComponent,
    ImportServiceBulletinComponent,
    ImportDocumentAndLinkComponent,
    ImportBrandProtectionComponent,
    SettingsComponent,
  ],
  imports: [  
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    NgbModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatRippleModule,
    MatSelectModule,
    CommonModule,
    RouterModule,
    MatRadioModule,
    

  ],
  providers: [],

  bootstrap: [AppComponent],
  entryComponents:[AddSerialNumberComponent,UpdateSerialNumberComponent,DeleteSerialNumberComponent,ForgotPasswordComponent,SignUpComponent]
})
export class AppModule { }
