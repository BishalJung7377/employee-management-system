import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EMSRoutingModule } from './modules/ems.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EMSRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
