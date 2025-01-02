import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; 
import { ModelProduct } from '../models/model-product';
import { CommonModule } from '@angular/common'; 

// Importing PrimeNG components for the SplitButton and Toast
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-game-details',
  standalone: true, 
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, SplitButton, ToastModule],
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
  providers: [MessageService]  // Injecting the MessageService to show toast notifications
})
export class GameDetailsComponent implements OnInit {
  selectedProduct: ModelProduct | null = null;

  items: MenuItem[];

  constructor(
    private toysService: ToysServiceService,
    private messageService: MessageService
  ) {
    // Defining actions for the SplitButton
    this.items = [
      {
        label: 'Add to Cart',
        command: () => {
          this.addToCart();
        }
      }, 
      {
        label: 'לבדוק האם זמין?',  // Check Availability button
        command: () => {
          this.checkAvailability();
        }
      }
    ];
  }

  ngOnInit() {
    // Retrieving the selected product from the service
    this.selectedProduct = this.toysService.getSelectedProduct();
    console.log(this.selectedProduct);
  }

  // Method to show success notification when adding to cart
  addToCart() {
    // Displaying a success toast message for adding to cart
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added to cart' });
  }

  // Method to check if the product is available
  checkAvailability() {
    // Assuming that a product has an `availability` property to check availability
   
      this.messageService.add({ severity: 'success', summary: 'Available', detail: 'The product is available for purchase' });
  
}
}