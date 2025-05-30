import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { ModelProduct } from '../models/model-product';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import "primeicons/primeicons.css";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, CheckboxModule, SliderModule, ToastModule],  // Make sure ToastModule is included here
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService]  // Inject MessageService here
})
export class ProductsComponent implements OnInit {
  products: ModelProduct[] = [];
  filterProducts: ModelProduct[] = [];
  activeCategories: number[] = [];
  selected: string;
  filter: boolean = false;
  addTofavorite: ModelProduct[] = [];
  priceRange: number[] = [0, 500];
  ages: string[] = ['Kids', 'Teens', 'Adults'];
  isHeartClicked: { [key: number]: boolean } = {}; // Track heart clicked for each product
  isCartClicked: { [key: number]: boolean } = {}; // Track cart click for each product

  constructor(
    private toysService: ToysServiceService,
    private messageService: MessageService,  // Inject MessageService
    private router: Router,
  ) { }

  selectedProduct: ModelProduct | null = null;

  ngOnInit(): void {
    this.toysService.getProductList().subscribe(
      (data) => {
        this.products = data;
        this.initializeHeartState();
      },
      (error) => {
        console.error('Error fetching products:', error);
        alert('There was an error fetching the products. Please try again later.');
      }
    );
    this.selectedProduct = this.toysService.getSelectedProduct();
    console.log(this.selectedProduct);
  }

  initializeHeartState(): void {
    const heartState = sessionStorage.getItem('heartState');
    if (heartState) {
      this.isHeartClicked = JSON.parse(heartState);
    }
  }

  onChangeofOptionsofSort(event: any): void {
    if (this.selected === 'byAge') {
      this.sortByAge();
    } else if (this.selected === 'byPrice') {
      this.sortByPrice();
    }
  }

  onPriceRangeChange(event: any): void {
    const [minPrice, maxPrice] = this.priceRange;
    this.filterProducts = this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    this.filter = true;
  }

  onAgeChange(age: string): void {
    this.filter = true;
    if (age === 'Kids') {
      this.filterProducts = this.products.filter(product => product.age <= 5);
    } else if (age === 'Teens') {
      this.filterProducts = this.products.filter(product => product.age > 5 && product.age <= 12);
    } else if (age === 'Adults') {
      this.filterProducts = this.products.filter(product => product.age > 12);
    }
  }

  sortByAge(): void {
    this.products.sort((a, b) => a.age - b.age);
  }

  sortByPrice(): void {
    this.products.sort((a, b) => a.price - b.price);
  }

  onProductClick(product: any): void {
    this.toysService.setSelectedProduct(product);
    this.router.navigate(['/game-details']);
  }

  categories: any[] = [
    { name: 'Board Game', key: '1' },
    { name: 'Card Game', key: '2' },
    { name: 'Family Game', key: '3' }
  ];

  onCategoryChange(category: string): void {
    this.filter = true;
    const index = this.activeCategories.indexOf(parseInt(category));
    if (index === -1) {
      this.activeCategories.push(parseInt(category));
      this.toysService.getProductByCategory(Number(category)).subscribe((data: any) => {
        this.filterProducts = [...this.filterProducts, ...data];
      });
    } else {
      this.activeCategories.splice(index, 1); 
      this.filterProducts = this.filterProducts.filter(product => product.categoryid != parseInt(category));
    }

    if (this.activeCategories.length == 0) {
      this.filter = false;
      this.toysService.getProductList().subscribe((data: any) => {
        this.filterProducts = [];
        this.products = data;
      });
    }
  }

  favorite(event: MouseEvent, product: ModelProduct): void {
    event.stopPropagation();
    this.isHeartClicked[product.id] = !this.isHeartClicked[product.id];
    sessionStorage.setItem('heartState', JSON.stringify(this.isHeartClicked));

    if (this.isHeartClicked[product.id]) {
      this.toysService.addToLove(product); // Add to favorites
    } else {
      this.toysService.removeFromLove(product);
    }
  }

  cartAndToast(event: MouseEvent, product: ModelProduct): void {
    event.stopPropagation();
    this.isCartClicked[product.id] = !this.isCartClicked[product.id];
    sessionStorage.setItem('cartState', JSON.stringify(this.isCartClicked));

    if (this.isCartClicked[product.id]) {
      this.toysService.addToCart(product);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added to cart' });
      console.log("Toast message should appear now"); 
    } else {
      this.toysService.removeFromCart(product);
    }
  }
  
}
