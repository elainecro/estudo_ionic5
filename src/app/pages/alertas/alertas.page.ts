import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alerta() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Sub Título',
      message: 'Esta é a mensagem do alerta.',
      buttons: ['OK']
    });

    alert.present();
  }

  async multiple() {
    const alert = await this.alertCtrl.create({
      header: 'Título do Alerta',
      subHeader: 'Subtítulo',
      message: 'Aqui vai a mensagem do alerta.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
    alert.present();
  }

  async confirm(){
    const alert = await this.alertCtrl.create({
      header: 'Confirma',
      message: 'Mensagem de <strong>confirmação</strong>!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirma okay');
          }
        }
      ]
    });
    alert.present();
  }

  async prompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt',
      inputs: [
        {
          name: 'nome1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'nome2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Ok',
          handler: (form) => {
            console.log('Confirmado!');
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }

}
