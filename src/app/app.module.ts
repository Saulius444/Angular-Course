import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './assignment2/server/server.component';
import { ServersComponent } from './assignment2/servers/servers.component';
import { MenuComponent } from './menu/menu.component';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Assignment1Component } from './assignment1/assignment1.component';
import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MenuComponent,
    Assignment1Component,
    SuccessAlertComponent,
    WarningAlertComponent,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: AccordionConfig, useValue: { closeOthers: true } }],
  bootstrap: [AppComponent]
})
export class AppModule {}
