import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooglePage } from './toogle.page';

const routes: Routes = [
  {
    path: '',
    component: TooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TooglePageRoutingModule {}
