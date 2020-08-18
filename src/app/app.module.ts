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
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DelectProductComponent } from './product/delect-product/delect-product.component';
import { DeleteSerialNumberComponent } from './serial-numbers/delete-serial-number/delete-serial-number.component';
import { PopupmessageComponent } from './popupmessage/popupmessage.component';

import { ImportloadComponent } from './importload/importload.component';
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
    
    ImportloadComponent
  ],
  imports: [  
    MDBBootstrapModule.forRoot(),
    BrowserModule,
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
    MatPaginatorModule
  ],
  providers: [AdminloginService],
  bootstrap: [AppComponent],
  entryComponents:[AddSerialNumberComponent,UpdateSerialNumberComponent,DeleteSerialNumberComponent]
})
export class AppModule { }