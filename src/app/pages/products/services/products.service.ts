import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURL = 'http://localhost:4400/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { stock: stock };
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body);
  }
}
