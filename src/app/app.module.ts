import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './course-assignments/assignment2/server/server.component';
import { ServersComponent } from './course-assignments/assignment2/servers/servers.component';
import { MenuComponent } from './menu/menu.component';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Assignment1Component } from './course-assignments/assignment1/assignment1.component';
import { SuccessAlertComponent } from './course-assignments/assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './course-assignments/assignment1/warning-alert/warning-alert.component';
import { Assignment2Component } from './course-assignments/assignment2/assignment2.component';
import { Assignment3Component } from './course-assignments/assignment3/assignment3.component';
import { HeaderComponent } from './course-project/header/header.component';

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
    Assignment3Component,
    HeaderComponent
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
