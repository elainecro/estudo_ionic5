import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: "app-api",
  templateUrl: "./api.page.html",
  styleUrls: ["./api.page.scss"],
})
export class ApiPage implements OnInit {
  cep: string = "29015330";
  endereco: any;
  result: any;

  constructor(private cepService: CepService, private usuarioService: UsuarioService) { }

  ngOnInit() { }

  consultarCEP() {
    this.cepService.obterEndereco(this.cep)
      .then((json) => {
        this.endereco = json;
        console.log(json);
        alert(json);
      })
      .catch((erro) => {
        console.log(erro);
        alert('Deu ruim');
      });
  }

  get() {
    this.usuarioService.obterUsuarioPorId(2)
      .then((response) => {
        this.result = JSON.stringify(response);
      })
      .catch((erro) => {
        this.result = JSON.stringify(erro);
      });
  }

  post() {
    let usuario = { id: 4, firstname: 'Elaine' };
    this.usuarioService.adicionar(usuario).then((response: any) => {
      this.result = JSON.stringify(response);
    })
      .catch((erro) => {
        this.result = JSON.stringify(erro);
      });
  }

  put() {
    let usuario = { id: 4, firstname: 'Maria' };
    this.usuarioService.atualizar(usuario).then((response: any) => {
      this.result = JSON.stringify(response);
    })
    .catch((response) => {
      this.result = JSON.stringify(response);
    });
  }

  delete() {
    this.usuarioService
      .excluirPorId(4)
      .then((response) => {
        this.result = JSON.stringify(response);
      })
      .catch((response) => {
        this.result = JSON.stringify(response);
      });
  }
}
