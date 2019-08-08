import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './course-assignments/assignment2/server/server.component';
import { ServersComponent } from './course-assignments/assignment2/servers/servers.component';
import { MenuComponent } from './course-assignments/menu/menu.component';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Assignment1Component } from './course-assignments/assignment1/assignment1.component';
import { SuccessAlertComponent } from './course-assignments/assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './course-assignments/assignment1/warning-alert/warning-alert.component';
import { Assignment2Component } from './course-assignments/assignment2/assignment2.component';
import { Assignment3Component } from './course-assignments/assignment3/assignment3.component';
import { HeaderComponent } from './course-project/header/header.component';
import { RecipesComponent } from './course-project/recipes/recipes.component';
import { RecipeListComponent } from './course-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './course-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './course-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './course-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './course-project/shopping-list/shopping-edit/shopping-edit.component';
import { Assignment4Component } from './course-assignments/assignment4/assignment4.component';
import { CockpitComponent } from './course-assignments/assignment4/cockpit/cockpit.component';
import { ServerElementComponent } from './course-assignments/assignment4/server-element/server-element.component';

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
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Assignment4Component,
    CockpitComponent,
    ServerElementComponent
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
