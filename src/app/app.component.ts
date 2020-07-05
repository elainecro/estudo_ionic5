import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Navegação",
      url: "navegacao",
      icon: "mail",
    },
    {
      title: "Navegação 2",
      url: "navegacao2",
      icon: "mail",
    },
    {
      title: "Botões",
      url: "botao",
      icon: "construct",
    },
    {
      title: "Alertas",
      url: "alertas",
      icon: "alert",
    },
    {
      title: "Action-Sheet",
      url: "actionsheet",
      icon: "umbrella",
    },
    {
      title: "Badge",
      url: "badge",
      icon: "pricetag",
    },
    {
      title: "Card",
      url: "card",
      icon: "card",
    },
    {
      title: "Checkbox",
      url: "checkbox",
      icon: "checkbox",
    },
    {
      title: "Chip",
      url: "chip",
      icon: "hardware-chip",
    },
    {
      title: "Content",
      url: "content",
      icon: "apps",
    },
    {
      title: "DateTime",
      url: "datetime",
      icon: "calendar",
    },
    {
      title: "Fab",
      url: "fab",
      icon: "radio-button-on",
    },
    {
      title: "Grid",
      url: "grid",
      icon: "grid",
    },
    {
      title: "Infinite Scroll",
      url: "infinitescroll",
      icon: "infinite",
    },
    {
      title: "Input",
      url: "input",
      icon: "chatbox-ellipses",
    },
    {
      title: "List",
      url: "list",
      icon: "list-circle",
    },
    {
      title: "Progress Bar",
      url: "progressbar",
      icon: "reload-circle",
    },
    {
      title: "Refresher",
      url: "refresher",
      icon: "refresh",
    },
    {
      title: "Reorder",
      url: "reorder",
      icon: "reorder-three",
    },
    {
      title: "Select",
      url: "select",
      icon: "heart-half",
    },
    {
      title: "Toggle",
      url: "toogle",
      icon: "toggle",
    },
    {
      title: "Search Bar",
      url: "searchbar",
      icon: "search-circle",
    },
    {
      title: "Segment",
      url: "segment",
      icon: "disc",
    }
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
