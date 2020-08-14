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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    
    NavBarComponent,
    SerialNumbersComponent,
    AddSerialNumberComponent
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
    MatDialogModule
  ],
  providers: [AdminloginService],
  bootstrap: [AppComponent],
  entryComponents:[AddSerialNumberComponent]
})
export class AppModule { }
