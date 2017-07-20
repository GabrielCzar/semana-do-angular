import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {
  pessoa_selecionada : any = {};
  
  lista : any[] = [
    {
      nome: 'Gabriel',
      idade: 20,
      descricao: 'Gabriel la la <strong>sha la la</strong>'
    },
    {
      nome: 'Cesar',
      idade: 19,
      descricao: 'Cesar la la sha la la'
    },
    {
      nome: 'Alves',
      idade: 26,
      descricao: 'Alves la la sha la la'
    },
    {
      nome: 'Lima',
      idade: 16,
      descricao: 'Lima la la sha la la'
    }
  ]

  constructor() { }

  selecionaPessoa(pessoa : any) {
    this.pessoa_selecionada = pessoa;
  }
}
