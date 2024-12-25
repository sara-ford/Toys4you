import { Component } from '@angular/core';
import { ModelProduct } from '../models/model-product';
import { ToysServiceService } from '../toys-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  removeFromFavorites(product: ModelProduct): void {
    // הסרת המוצר מהמועדפים
    const index = this.favoriteProducts.indexOf(product);
    if (index > -1) {
      this.favoriteProducts.splice(index, 1);
      // גם יש להסיר מהמוצר מהמועדפים בשירות (לרוב זה ייעשה על ידי קריאה לשירות להוסיף/remove את המוצר)
      const productIndex = this.toysService.addTofavorite.indexOf(product);
      if (productIndex > -1) {
        this.toysService.addTofavorite.splice(productIndex, 1);
      }
    }
  }
  favoriteProducts: ModelProduct[] = [];

  constructor(private toysService: ToysServiceService) { }

  ngOnInit(): void {
    // משיכת המוצרים המועדפים מהשירות
    this.favoriteProducts = this.toysService.addTofavorite;
  }
}
