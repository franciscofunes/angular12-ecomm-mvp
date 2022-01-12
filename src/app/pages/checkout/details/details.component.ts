import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from 'src/app/shared/components/header/services/shopping-car.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc: ShoppingCarService) {}

  ngOnInit(): void {}
}
