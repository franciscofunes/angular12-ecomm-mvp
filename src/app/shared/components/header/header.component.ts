import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCarService } from './services/shopping-car.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <a [routerLink]="['/']"><span>Déjalo ir 🛒</span></a>
      <span class="spacer"></span>
      <app-cart class="mouseCursor" (click)="goToCheckout()"></app-cart>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
