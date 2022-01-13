import { Component } from '@angular/core';
import { ShoppingCarService } from '../services/shopping-car.service';

@Component({
  selector: 'app-cart',
  template: `
    <ng-container
      *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart"
    >
      <ng-container *ngIf="dataCart.total">
        <mat-icon>shopping_cart</mat-icon>
        {{ dataCart.total | currency }}
        ({{ dataCart.quantity }})
      </ng-container>
    </ng-container>
  `,
})
export class CartComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  constructor(private shoppingCartSvc: ShoppingCarService) {}
}
