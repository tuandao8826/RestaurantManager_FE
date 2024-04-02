import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { DishIndexComponent } from './dish/dish-index/dish-index.component';
import { DishCreateComponent } from './dish/dish-create/dish-create.component';
import { DishEditComponent } from './dish/dish-edit/dish-edit.component';
import { DishDeleteComponent } from './dish/dish-delete/dish-delete.component';
import { DishDetailsComponent } from './dish/dish-details/dish-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuIndexComponent } from './menu/menu-index/menu-index.component';
import { MenuCreateComponent } from './menu/menu-create/menu-create.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { MenuDeleteComponent } from './menu/menu-delete/menu-delete.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    DishIndexComponent,
    DishCreateComponent,
    DishEditComponent,
    DishDeleteComponent,
    DishDetailsComponent,
    MenuComponent,
    MenuIndexComponent,
    MenuCreateComponent,
    MenuEditComponent,
    MenuDeleteComponent,
    MenuDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
