import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/providers/menu.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "app/providers/products.service";
import { CartService } from "app/providers/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {
  product : any = {};

  constructor(
    public activatedRoute : ActivatedRoute,
    public router : Router,
    public products : ProductsService,
    public carts : CartService,
    public menu : MenuService) {

    this.activatedRoute //chama a rota ativa
      .params
      .subscribe( // se inscreve para quando a rota for recebida
        params => {  //recebe os parametros
          let id = params['id']; // pega o Id da URL

          this.products.view(id) // pega  o item em questao
            .then((product : any) => { // quando ele for resolvido
              this.product = product;
            })
            .catch((e) => {
              console.log(e)
              // forca navegacao para 404
              this.router.navigate(['/404'])
            })
        }
      )
  }

  ngOnInit() {}

  closeMenu () { this.menu.close() }
}
