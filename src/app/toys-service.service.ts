import { Injectable } from '@angular/core';
import { ModelProduct } from './models/model-product';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {
  productList: ModelProduct[] = [
    new ModelProduct(1, 'Monopoly', 1, 1, 'a real-estate board game for two to eight players', 100,'assets/images/monopoly.png'
, new Date("2020-08-01"), 9),
  new ModelProduct(2, 'Rumikkub', 1, 1, 'based game for 2 to 4 players, combining elements of the card game rummy and mahjong', 80, 'assets/images/rummikub.png', new Date("2018-12-03"), 7),
  new ModelProduct(3, 'Bingo', 1, 1, 'a game in which each player has a card with numbers on', 120, 'assets/images/bingo.png', new Date("2020-08-01"), 4)
  ];

  private selectedProduct: ModelProduct | null = null;  // הוספנו את המשתנה selectedProduct

  constructor() { }

  getProductList(): Promise<ModelProduct[]> {
    return Promise.resolve(this.productList);
  }

  setSelectedProduct(product: ModelProduct): void {
    this.selectedProduct = product; 
  }
  
  getSelectedProduct(): ModelProduct | null {
    return this.selectedProduct;  
  }
}  