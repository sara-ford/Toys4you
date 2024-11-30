import { Component, OnInit } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';
import { ModelProduct } from '../models/model-product';
import { CommonModule } from '@angular/common';  // הוספת CommonModule

@Component({
  selector: 'app-game-details',
  standalone: true,  // לוודא שהקומפוננטה היא עצמאית
  imports: [CommonModule],  // הוספת CommonModule כדי ש-pipes יעבדו
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  selectedProduct: ModelProduct | null = null;

  constructor(private toysService: ToysServiceService) {}

  ngOnInit() {
    this.selectedProduct = this.toysService.getSelectedProduct();
  }
}
