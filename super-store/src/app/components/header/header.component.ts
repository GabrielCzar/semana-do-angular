import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/providers/menu.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  modal : boolean;

  constructor(public menu : MenuService) { }

  ngOnInit() {
    document.addEventListener('scroll', (e) => {
      if (document.body.scrollTop > 65) {
        $('app-header nav').addClass('fixed');
        this.menu.fix();
      } else {
        $('app-header nav').removeClass('fixed');
        this.menu.fix();
      }
    })
  }

  hideSearch(){
    this.modal = false;
  }

  showSearch(){
    this.modal = true;
  }

}
