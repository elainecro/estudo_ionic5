import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.page.html",
  styleUrls: ["./searchbar.page.scss"],
})
export class SearchbarPage implements OnInit {
  nome: string = "";
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, idade: 32, nome: "Elaine Cristina" },
      { id: 1, idade: 66, nome: "Maria José" },
      { id: 1, idade: 39, nome: "Edésio Jr" },
      { id: 1, idade: 27, nome: "Rafaela Figueiredo" },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {}

  filtrarItens(evento) {
    this.nome = evento.target.value.toLowerCase();
    console.log(this.nome);
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome) {
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }
}
