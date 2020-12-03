import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { AngularMaterialModule } from '../../app-common/angular-material.module';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    AngularMaterialModule
  ]
})
export class MessagesModule { }
