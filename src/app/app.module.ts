import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DateCountdownComponent } from './date-countdown/date-countdown.component';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DateCountdownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
