import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/pages/products/interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCarService {
  products: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

  // Three getters the return the value of the observables
  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  // Methods

  updateCart(product: Product): void {
    this.addToCart(product);
    this.quantityProducts();
    this.calculateTotal();
  }

  resetCart(): void {
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
  }

  private addToCart(product: Product): void {
    const isProductInCart = this.products.find(({ id }) => id === product.id);

    if (isProductInCart) {
      isProductInCart.qty += 1;
    } else {
      this.products.push({ ...product, qty: 1 });
    }
    this.cartSubject.next(this.products);
  }

  private quantityProducts(): void {
    const quantity = this.products.reduce(
      (acc, product) => (acc += product.qty),
      0
    );
    this.quantitySubject.next(quantity);
  }

  private calculateTotal(): void {
    const total = this.products.reduce(
      (acc, product) => (acc += product.price * product.qty),
      0
    );
    this.totalSubject.next(total);
  }
}
