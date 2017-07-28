import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import * as _ from 'lodash';
import * as $ from 'jquery';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'; 

// Lendo diretamente do arquivo JSON
//const products = require('./products.json');
const gamesAPI = "https://games-876fb.firebaseio.com/games.json"
let BASEURL = window.location.href.substring(0, window.location.href.length - 1);

@Injectable()
export class ProductsService {
  private games;

  constructor(private http: HttpClient) { }

  listar () { // Consumindo da API do Firebase
    return new Promise((resolve, reject) => {
      this.http.get(gamesAPI).toPromise().then(products => {
        _.map(products, product => {
          product.titleSlug = _.kebabCase(product.name)
          product.router = '/products/' + product.titleSlug + '/' + product.id
          product.url = BASEURL + product.router
        })
        resolve(products)
      })
    })
  }
/*
  // Consumindo diretamente de arquivo JSON
  getAllProducts() { 
    return new Promise((resolve, reject) => {
      products.map((product) => {
        product.titleSlug = _.kebabCase(product.name);
        product.router = '/products/' + product.titleSlug + '/' + product.id
        product.url = BASEURL + product.router
      });
      resolve(products);
    })
  }
*/
  view(id: any) {
    return new Promise((resolve, reject) => {
      this.listar().then((products: any[]) => {
        let product = _.find(products, p => {
          return p.id = id;
        });
        return product ? resolve(product) : reject('product not found!');
      })
    })
  }

  search(key: string) {
    return new Promise((res, rej) => {
      this.listar().then((products : any[]) => {
          let items : any[];
          if (products.length) {
            items = _.filter(products, p => {
              return p.name.toLocaleLowerCase().includes(key.toLocaleLowerCase());
            });
          }
          res(items);
      });
    })
  }

  scrollTop(){
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  }
}