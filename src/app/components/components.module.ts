import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent
  ],
})
export class ComponentsModule { }