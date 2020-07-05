import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextToSpeechPageRoutingModule } from './text-to-speech-routing.module';

import { TextToSpeechPage } from './text-to-speech.page';
import { TextToSpeech } from "@ionic-native/text-to-speech/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextToSpeechPageRoutingModule,
  ],
  declarations: [TextToSpeechPage],
  providers: [TextToSpeech]
})
export class TextToSpeechPageModule {}
