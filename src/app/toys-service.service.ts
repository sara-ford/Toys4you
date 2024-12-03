import { Injectable } from '@angular/core';
import { ModelProduct } from './models/model-product';

@Injectable({
  providedIn: 'root'
})
export class ToysServiceService {
  productList: ModelProduct[] = [
  new ModelProduct(1, 'Monopoly', 1, 1, 'a real-estate board game for two to eight players', 100,'assets/images/monopoly.png',new Date("2020-08-01"), 9),
  new ModelProduct(2, 'Rumikkub', 1, 1, 'based game for 2 to 4 players, combining elements of the card game rummy and mahjong', 80, 'assets/images/rummikub.png', new Date("2018-12-03"), 7),
  new ModelProduct(3, 'Bingo', 1, 1, 'a game in which each player has a card with numbers on', 120, 'assets/images/bingo.png', new Date("2020-08-01"), 4),
  new ModelProduct(4, 'sorry', 1, 1, 'a game in which each player has a card with numbers on', 75, 'assets/images/sorry.png', new Date("2021-08-01"), 6),
  new ModelProduct(5, 'bounce', 1, 1, 'a real-estate board game for two to eight players', 45,'assets/images/bounce.png',new Date("2020-08-01"), 2),
  new ModelProduct(6, 'candyLand', 1, 1, 'based game for 2 to 4 players, combining elements of the card game rummy and mahjong', 69, 'assets/images/candyLand.png', new Date("2018-12-03"), 6),
  new ModelProduct(7, 'dixit', 1, 1, 'a game in which each player has a card with numbers on', 100, 'assets/images/dixit.png', new Date("2020-08-01"), 9),
  new ModelProduct(8, 'farm', 1, 1, 'a game in which each player has a card with numbers on', 80, 'assets/images/farm.png', new Date("2021-08-01"), 2)
];
  private selectedProduct: ModelProduct | null = null; 

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
  cartlist: ModelProduct[] = [c
  ]
}  


 
 