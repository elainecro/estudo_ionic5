import { Component, OnInit } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-zoom",
  templateUrl: "./zoom.page.html",
  styleUrls: ["./zoom.page.scss"],
})
export class ZoomPage implements OnInit {
  API_KEY = 'xxx';
  API_SECRET: 'xxx';
  zoom: any = {
    usuario: 'xxx',
    senha: 'xxx',
    usuarioSala: 'xxx',
    senhaSala: 'xxx',
    nickUsuarioSala: 'xxx',
  };

  constructor(private zoomService: Zoom, private toastCtrl: ToastController) {}

  ngOnInit() {}

  inicializarZoom() {
    this.zoomService
      .initialize(this.API_KEY, this.API_SECRET)
      .then((success: any) => {
        this.showToast("Inicializou com sucesso!");
      })
      .catch((error: any) => {
        this.showToast("Erro ao inicializar");
        console.log(error);
      });
  }

  logarNoZoom() {
    this.zoomService
      .login(this.zoom.usuario, this.zoom.senha)
      .then((success: any) => {
        this.showToast("Logado com sucesso");
      })
      .catch((erro) => {
        this.showToast("Login com erro");
        console.log(erro);
      });
  }

  entrarNaSalaDoZoom() {
    const options = {
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_dial_in_via_phone: true,
      no_dial_out_to_phone: true,
      no_disconnect_audio: true,
      no_share: true,
      no_audio: true,
      no_video: true,
      no_meeting_error_message: true,
    };

    this.zoomService
      .joinMeeting(
        this.zoom.usuarioSala,
        this.zoom.senhaSala,
        this.zoom.nickUsuarioSala,
        options
      )
      .then((response) => {
        this.showToast("Entrei na sala");
        console.log("entrou na sala");
      })
      .catch((erro) => {
        this.showToast("Aconteceu um erro ao entrar na sala");
        console.log(erro);
      });
  }

  sairDaSalaDoZoom() {
    this.zoomService
      .logout()
      .then((success: boolean) => {
        this.showToast("Saiu com sucesso");
      })
      .catch((error: any) => console.log(error));
  }

  async showToast(mensagem: string = "Olá") {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }
}
