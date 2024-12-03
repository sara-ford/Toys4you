import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; 
import { ModelProduct } from '../models/model-product';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-game-details',
  standalone: true, 
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet],  
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  selectedProduct: ModelProduct | null = null;

  constructor(private toysService: ToysServiceService) {}

  ngOnInit() {
    this.selectedProduct = this.toysService.getSelectedProduct();
    console.log(this.selectedProduct);
  }
}
