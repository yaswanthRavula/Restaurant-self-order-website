import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CreateItemComponent } from './create-item/create-item.component';
import { ManageComponent } from './manage/manage.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms"




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreateItemComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatChipsModule,
    MatSlideToggleModule,
    RouterModule,
    FormsModule
  ]
})
export class ManagerModule { }