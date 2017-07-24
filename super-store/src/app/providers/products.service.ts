import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as $ from 'jquery';

const products = require('./products.json');
let BASEURL = window.location.href.substring(0, window.location.href.length - 1);

@Injectable()
export class ProductsService {

  constructor() { }

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

  view(id: any) {
    return new Promise((resolve, reject) => {
      this.getAllProducts().then((products: any[]) => {
        let product = _.find(products, (p) => {
          return p.id = id;
        });
        return product ? resolve(product) : reject('product not found!');
      })
    })
  }

  search(key: string) {
    return new Promise((res, rej) => {
      this.getAllProducts().then((products : any[]) => {
          let items : any[];
          if (products.length) {
            items = _.filter(products, (p) => {
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