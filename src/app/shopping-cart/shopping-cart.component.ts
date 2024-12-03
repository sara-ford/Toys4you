import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { FormsModule} from '@angular/forms';
import { ModelProduct } from '../models/model-product';

import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  selectedProduct: ModelProduct | null = null;

  constructor(
    private toysService: ToysServiceService
) {}

  ngOnInit() {
    this.selectedProduct = this.toysService.getSelectedProduct();
    //  this.toysService.cartlist.push(new );
  }
}
