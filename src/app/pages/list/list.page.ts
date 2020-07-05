import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  cores: string[] = ['Branco','Preto','Amarelo','Laranja', 'Rosa', 'Roxo', 'Vermelho']
  constructor() { }

  ngOnInit() {
  }

}
