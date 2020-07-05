import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesNativosPage } from './componentes-nativos.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesNativosPage
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'text-to-speech',
    loadChildren: () => import('./text-to-speech/text-to-speech.module').then( m => m.TextToSpeechPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesNativosPageRoutingModule {}
