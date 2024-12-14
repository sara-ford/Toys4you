import { Injectable } from '@angular/core';
import { ModelProduct } from './models/model-product';
import { CartProducts } from './models/cart-products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {
  constructor(private http: HttpClient) { }

  getProductList(): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>('http://localhost:5252/api/Product');
  }

  private selectedProduct: ModelProduct; 

  setSelectedProduct(product: ModelProduct): void {
    this.selectedProduct = product; 
  }
  
  getSelectedProduct(): ModelProduct {
    return this.selectedProduct;  
  }
  
  cartlist: CartProducts[] = [];

  addToCart(product: ModelProduct): void {
    const existingProduct = this.cartlist.find(a => a.product.id == product.id);
    if (existingProduct) {
      console.log(product.id);
      console.log(existingProduct.product.id);
      existingProduct.amount++;
      existingProduct.totalPrice += product.price;
    } else {
      this.cartlist.push(new CartProducts(product.amount, product, product.price * product.amount));
    }
    console.log(this.cartlist); 
  }
}
