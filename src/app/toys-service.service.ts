import { Injectable } from '@angular/core';
import { ModelProduct } from './models/model-product';
import { CartProducts } from './models/cart-products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelCustomer } from './models/model-customer';
import { ModelPurchase } from './models/model-purchase';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {
  constructor(private http: HttpClient) { }

  getProductList(): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>('http://localhost:5252/api/Product');
  }

  getProductByCategory(categoryId: number): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>(`http://localhost:5252/api/Product/SortByCategory?categoryId=${categoryId}`);
  }

  getCustomerByPassword(password: string, name: string): Observable<any> {
    return this.http.post<any>(`http://localhost:5252/api/Costumer/api/Costumer/${password}?name=${name}`, {});
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
    const existingProduct = this.cartlist.find(a => a.product.id === product.id);
    if (existingProduct) {
      existingProduct.amount++;
      existingProduct.totalPrice += product.price;
    } else {
      this.cartlist.push(new CartProducts(product.amount, product, product.price * product.amount));
    }
    
    // Store cart list in localStorage
    localStorage.setItem('cartList', JSON.stringify(this.cartlist));
  }
  

  addTofavorite: ModelProduct[] = [];

  addToLove(cartProduct: CartProducts | ModelProduct): void {
    const product = cartProduct instanceof CartProducts ? cartProduct.product : cartProduct;

    if (!product || !product.id) {
      console.error('Product does not contain id:', product);
      return;
    }

    const existingProduct = this.addTofavorite.find(a => a.id === product.id);
    if (!existingProduct) {
      this.addTofavorite.push(product);
      console.log('Product added to favorites:', product);
    } else {
      console.log('Product is already in favorites');
    }
  }

  private apiUrlCustomer = 'http://localhost:5252/api/Costumer/InsertCustomer';
  private apiUrlPurchase = 'http://localhost:5252/api/purchase/InsertPurchase';

  insertCustomer(customer: ModelCustomer): Observable<ModelCustomer> {
    return this.http.post<ModelCustomer>(this.apiUrlCustomer, customer);
  }

  insertPurchase(purchase: ModelPurchase): Observable<any> {
    return this.http.post<any>(this.apiUrlPurchase, purchase);
  }
}