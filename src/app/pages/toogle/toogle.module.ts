import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TooglePageRoutingModule } from './toogle-routing.module';

import { TooglePage } from './toogle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TooglePageRoutingModule
  ],
  declarations: [TooglePage]
})
export class TooglePageModule {}
