import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { ModelProduct } from '../models/model-product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
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
}
