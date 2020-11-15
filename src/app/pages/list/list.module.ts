import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ListPageRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}