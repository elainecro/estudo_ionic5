import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { ModalInternoComponent } from 'src/app/components/modal-interno/modal-interno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
