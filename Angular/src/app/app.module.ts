import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Gate1Component } from './gate1/gate1.component';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from "@angular/material/button";
import { Gate2Component } from './gate2/gate2.component';
import { TicketComponent } from './ticket/ticket.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {QrCodeModule} from "ng-qrcode";
import {QRCodeModule} from "angularx-qrcode";
import {AdministracjaComponent, DialogEdit} from './administracja/administracja.component';
import {MatIconModule} from "@angular/material/icon";
import { WyjazdComponent } from './wyjazd/wyjazd.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    Gate1Component,
    Gate2Component,
    TicketComponent,
    AdministracjaComponent,
    WyjazdComponent,
    DialogEdit
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    QrCodeModule,
    QRCodeModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
