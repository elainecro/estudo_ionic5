import { Component, OnInit } from '@angular/core';
import { ModalInternoComponent } from 'src/app/components/modal-interno/modal-interno.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ModalInternoComponent,
      event: ev,
      translucent: true,
      componentProps: {nome: 'Popover da Elaine Cristina'}
    });
    return await popover.present();
  }
}
