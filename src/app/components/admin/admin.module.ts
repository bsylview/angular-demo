import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { CollectionsComponent } from '../../shared/components/collections/collections.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AdminComponent,
    CollectionsComponent
  ]
})
export class AdminModule { }
