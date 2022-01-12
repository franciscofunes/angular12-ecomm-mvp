import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() currentProduct!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  constructor() {}

  onClick(): void {
    this.addToCartClick.emit(this.currentProduct);
  }
}
