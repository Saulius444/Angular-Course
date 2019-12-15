import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { Assignment41Component } from './course-assignments/assignment41/assignment41.component';
import { EvenComponent } from './course-assignments/assignment41/even/even.component';
import { OddComponent } from './course-assignments/assignment41/odd/odd.component';
import { GameControlComponent } from './course-assignments/assignment41/game-control/game-control.component';
import { Assignment5Component } from './course-assignments/assignment5/assignment5.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';

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
    ServerElementComponent,
    Assignment41Component,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    Assignment5Component,
    BasicHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{ provide: AccordionConfig, useValue: { closeOthers: true } }],
  bootstrap: [AppComponent]
})
export class AppModule {}
