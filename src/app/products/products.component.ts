import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { ModelProduct } from '../models/model-product';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule, CheckboxModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: ModelProduct[] = []; 

  selected: string;
  
  constructor(
    private toysService: ToysServiceService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.toysService.getProductList().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
        alert('There was an error fetching the products. Please try again later.');
      }
    );
  }
  

  onChangeofOptionsofSort(event: any): void {
    console.log('selected=>', this.selected);
    if (this.selected == 'byAge') {
      this.sortByAge();
    } else if (this.selected == 'byPrice') {
      this.sortByPrice();
    }
  }

  onChangeofOptionsofFilter(event: any): void {
    console.log('selected=>', this.selected);
    if (this.selected == 'forKids') {
      this.filterkids();
    } else if (this.selected == 'forTeens') {
      this.filterteen();
    }
  }

  sortByAge(): void {
    this.products.sort((a, b) => a.age - b.age);  
  }

  sortByPrice(): void {
    this.products.sort((a, b) => a.price - b.price); 
  }

  filterkids(): void {
    this.products = this.products.filter((product) => product.age <= 5);
  }

  filterteen(): void {
    this.products = this.products.filter(
      (product) => product.age <= 8 && product.age >= 5 
    );
  }

  onProductClick(product: any): void {
    this.toysService.setSelectedProduct(product); 
    this.router.navigate(['/game-details']); 
  }
  selectedCategory: any;  // לא מערך, אלא משתנה בודד

  categories: any[] = [
    { name: 'board game', key: '1' },
    { name: 'card game', key: '2' },
    { name: 'family game', key: '3' }
  ];
  onCategoryChange(): void {
    // בודק אם יש קטגוריה שנבחרה
    if (this.selectedCategory) {
      // הדפסת הקטגוריה המלאה
      console.log('Selected Category:', this.selectedCategory);
  
      // שולף רק את ה-key מתוך selectedCategory
      const categoryId = this.selectedCategory.key;
  
      // הדפסת ה-key כדי לוודא שהוא מתקבל כראוי
      console.log('Selected Category ID (key):', categoryId);
  
      // אם יש categoryId תקני (לא NaN או null)
      if (categoryId) {
        this.toysService.getProductByCategory(Number(categoryId)).subscribe(
          (data) => {
            this.products = data;  // מעדכן את המוצרים לפי הקטגוריה
          },
          (error) => {
            console.error('Error fetching products by category:', error);
            alert('There was an error fetching the products for the selected category. Please try again later.');
          }
        );
      } else {
        console.error('Invalid categoryId:', categoryId);
        alert('Invalid category selected. Please select a valid category.');
      }
    } else {
      console.log('No category selected.');
      alert('Please select a category.');
    }
  }
  

  // sortByCategory() {
  //   this.selectedCategories = [this.categories[1]]; 
  
  //     const categoryId = this.selectedCategories[0].key;
  
  //     this.toysService.getProductByCategory(Number(categoryId)).subscribe(
  //         (data) => {
  //             this.products = data; 
  //         },
  //         (error) => {
  //             console.error('Error fetching products by category:', error);
  //             alert('There was an error fetching the products for the selected category. Please try again later.');
  //         }
  //     );
  // }
  
}




  