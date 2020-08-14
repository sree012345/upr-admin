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
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DelectProductComponent } from './product/delect-product/delect-product.component';
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
    DelectProductComponent
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
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [AdminloginService],
  bootstrap: [AppComponent],
  entryComponents:[AddSerialNumberComponent,UpdateSerialNumberComponent]
})
export class AppModule { }
