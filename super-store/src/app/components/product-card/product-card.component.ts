import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from "app/providers/products.service";
import { CartService } from "app/providers/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input() product : any = {}
  @Input() view : boolean = false;
  
  constructor(public products: ProductsService, public cart: CartService) {}

  ngOnInit() {
    setTimeout(() => {
      this.products.scrollTop();
    }, 0)

  }
  
  addToCart(item: any) {
    this.cart.add(item).then(() => { 
      console.info(item.name + ' adicionado/atualizado no carrinho');
    }).catch(console.warn)
  }

}
