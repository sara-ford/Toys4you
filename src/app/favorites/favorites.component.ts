import { Component, OnInit } from '@angular/core';
import { ModelProduct } from '../models/model-product';
import { ToysServiceService } from '../toys-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: ModelProduct[] = [];

  constructor(private toysService: ToysServiceService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const favorites = sessionStorage.getItem('favoriteProducts');
    if (favorites) {
      this.favoriteProducts = JSON.parse(favorites);
    } else {
      this.favoriteProducts = this.toysService.addTofavorite;
    }
  }

  removeFromFavorites(product: ModelProduct): void {
    const index = this.favoriteProducts.indexOf(product);
    if (index > -1) {
      this.favoriteProducts.splice(index, 1);
      const productIndex = this.toysService.addTofavorite.indexOf(product);
      if (productIndex > -1) {
        this.toysService.addTofavorite.splice(productIndex, 1);
      }
      sessionStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteProducts));
    }
  }
}