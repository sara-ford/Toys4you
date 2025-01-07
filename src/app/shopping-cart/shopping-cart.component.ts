import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartProducts } from '../models/cart-products';
import { Router } from '@angular/router';
import { ModelPurchase } from '../models/model-purchase';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartlist: CartProducts[] = [];  
  totalPrice:number;
  constructor(
    private toysService: ToysServiceService,
    private router: Router
  ) { }
  ngOnInit(): void {    debugger
    const selectedProduct = this.toysService.getSelectedProduct();
    console.log(selectedProduct);
    this.cartlist = this.toysService.cartlist; 
    this.toysService.addToCart(selectedProduct);
  }
  
  increaseAmount(product: CartProducts): void {
    product.amount++;
    product.totalPrice = product.amount * product.product.price;
  }
  
  decreaseAmount(product: CartProducts): void {
    if (product.amount > 1) { 
      product.amount--;
      product.totalPrice = product.amount * product.product.price;
    }
  }
  
  removeProduct(product: CartProducts): void {
    const index = this.cartlist.indexOf(product);
    if (index !== -1) {
      this.cartlist.splice(index, 1);
    }
  }

  getTotalPrice(): string {
    if (this.cartlist.length == 0) {
        return "Your cart is empty"; 
    }

    const totalPrice = this.cartlist.reduce((total, product) => total + product.totalPrice, 0);
    return `Total price: ${totalPrice}`;  
}


checkIfLogInBeforePayment() {
  sessionStorage.setItem('totalPrice', this.totalPrice.toString());
  if (sessionStorage.getItem('userName') !== null) {
    this.router.navigate(['/check-out']);
  } else {
    this.router.navigate(['/signIn']);
  }
}
purchase: ModelPurchase = {
  customerId: 1,
  sumToPay: 150,
  comments: 'הערות על הרכישה'
};

submitPurchase() {
  this.toysService.insertPurchase(this.purchase).subscribe(
    response => {
      console.log('Purchase inserted successfully', response);
    },
    error => {
      console.error('Error inserting purchase', error);
    }
  );
}

}
