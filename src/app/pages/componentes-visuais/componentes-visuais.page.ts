import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection: any[] = [];

  constructor(private navCtrl: NavController) {
    this.menuCollection = [{
      title: 'Navegação',
      url: 'navegacao',
      icon: 'mail',
    },
    {
      title: 'Navegação 2',
      url: 'navegacao2',
      icon: 'mail',
    },
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct',
    },
    {
      title: 'Alertas',
      url: 'alertas',
      icon: 'alert',
    },
    {
      title: 'Action-Sheet',
      url: 'actionsheet',
      icon: 'umbrella',
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'pricetag',
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'card',
    },
    {
      title: 'Checkbox',
      url: 'checkbox',
      icon: 'checkbox',
    },
    {
      title: 'Chip',
      url: 'chip',
      icon: 'hardware-chip',
    },
    {
      title: 'Content',
      url: 'content',
      icon: 'apps',
    },
    {
      title: 'DateTime',
      url: 'datetime',
      icon: 'calendar',
    },
    {
      title: 'Fab',
      url: 'fab',
      icon: 'radio-button-on',
    },
    {
      title: 'Grid',
      url: 'grid',
      icon: 'grid',
    },
    {
      title: 'Infinite Scroll',
      url: 'infinitescroll',
      icon: 'infinite',
    },
    {
      title: 'Input',
      url: 'input',
      icon: 'chatbox-ellipses',
    },
    {
      title: 'List',
      url: 'list',
      icon: 'list-circle',
    },
    {
      title: 'Progress Bar',
      url: 'progressbar',
      icon: 'reload-circle',
    },
    {
      title: 'Refresher',
      url: 'refresher',
      icon: 'refresh',
    },
    {
      title: 'Reorder',
      url: 'reorder',
      icon: 'reorder-three',
    },
    {
      title: 'Select',
      url: 'select',
      icon: 'heart-half',
    },
    {
      title: 'Toggle',
      url: 'toogle',
      icon: 'toggle',
    },
    {
      title: 'Search Bar',
      url: 'searchbar',
      icon: 'search-circle',
    },
    {
      title: 'Segment',
      url: 'segment',
      icon: 'disc',
    },
    {
      title: 'Slides',
      url: 'slides',
      icon: 'albums',
    },
    {
      title: 'Toast',
      url: 'toast',
      icon: 'alert-circle',
    },
    {
      title: 'Modal',
      url: 'modal',
      icon: 'chatbubbles',
    },
    {
      title: 'Popover',
      url: 'popover',
      icon: 'filter',
    },
    {
      title: 'Radio',
      url: 'radio',
      icon: 'radio',
    }]
   }

  ngOnInit() {
  }

  showPage(url) {
    this.navCtrl.navigateForward(url);
  }

}
