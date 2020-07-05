import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: "app-text-to-speech",
  templateUrl: "./text-to-speech.page.html",
  styleUrls: ["./text-to-speech.page.scss"],
})
export class TextToSpeechPage implements OnInit {
  textoASerFalado: string;

  constructor(private tts: TextToSpeech) {}

  ngOnInit() {}

  falar() {
    this.tts
      .speak({
        text: this.textoASerFalado,
        locale: 'pt-BR',
        rate: 0.75
      })
      .then(() => console.log('Success'))
      .catch((reason: any) => {
        console.log(reason);
        alert(reason);
      });
  }
}
