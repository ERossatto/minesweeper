import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { LoggerComponent } from './logger/logger.component';

import { appProviders } from './providers';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: appProviders,
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
