import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { ModelProduct } from '../models/model-product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selected: string;
  productList: ModelProduct[];

  constructor(
    private toysService: ToysServiceService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.toysService.getProductList().then((products) => {
      this.productList = products;
    });
  }
  onChangeofOptionsofSort(event: any): void {
    console.log('selected=>', this.selected);
    if (this.selected === 'byAge') {
      this.sortByAge();
    } else if (this.selected === 'byPrice') {
      this.sortByPrice();
    }
  }

  onChangeofOptionsofFilter(event: any): void {
    console.log('select=>', this.selected);
    if (this.selected === 'forKids') {
      this.filterkids();
    } else if (this.selected === 'forTeens') {
      this.filterteen();
    }
  }

  sortByAge(): void {
    this.productList.sort((a, b) => a.age - b.age);
  }

  sortByPrice(): void {
    this.productList.sort((a, b) => a.price - b.price);
  }
  filterkids(): void {
    this.productList = this.productList.filter((product) => product.age <= 5);
  }

  filterteen(): void {
    this.productList = this.productList.filter(
      (product) => product.age <= 8 && product.age >= 5
    );
  }
  onProductClick(product: any): void {
    this.toysService.setSelectedProduct(product); 
    this.router.navigate(['/game-details']); 
  }
}
