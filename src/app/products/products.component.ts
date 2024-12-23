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
  imports: [CommonModule, HttpClientModule, FormsModule, CheckboxModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: ModelProduct[] = [];
  filterProducts: ModelProduct[] = [];
  activeCategories: number[] = [];
  selected: string;
  filter: boolean = false
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
  // selectedCategory: any; 
  categories: any[] = [
    { name: 'board game', key: '1' },
    { name: 'card game', key: '2' },
    { name: 'family game', key: '3' }
  ];


  onCategoryChange(category: string): void {
    // debugger
    this.filter = true

    const index = this.activeCategories.indexOf(parseInt(category))
    console.log(this.activeCategories.indexOf(parseInt(category)));

    if (index == -1) {
      this.activeCategories.push(parseInt(category));
      console.log('קטגוריות פעולות:', this.activeCategories);

      //         this.toysService.getProductByCategory(Number(category)).subscribe((data:any)=>{   
      //         this.filterProducts = [...this.filterProducts, ...data];
      //   })
      // }  
      this.toysService.getProductByCategory(Number(category)).subscribe((data: any) => {

        // this.filterProducts=data
        this.filterProducts = [...this.filterProducts, ...data];
      }
      );
    }
    else {debugger
      this.activeCategories.splice(index);
      // this.filterProducts = []
      console.log('קטגוריות פעולות לאחר ההסרה:', this.filterProducts);

      // this.toysService.getProductByCategory(Number(category)).subscribe((data:any)=>{
      // this.filterProducts = [...this.filterProducts, ...data];
      // })
      this.filterProducts = this.filterProducts.filter(product => product.categoryid != parseInt(category));
      console.log(this.filterProducts);
    }
    if (this.activeCategories.length == 0) {
      this.filter = false
      this.toysService.getProductList().subscribe(
        (data) => {
          this.filterProducts = []
          this.products = data;
        })
    }
  }

}




