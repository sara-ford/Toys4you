import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  deals = [
    { title: 'Toy Car', description: 'A fun toy car for kids', price: 99, imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Doll', description: 'A lovely doll for kids', price: 199, imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Puzzle', description: 'A challenging puzzle for kids', price: 149, imageUrl: 'https://via.placeholder.com/150' }
  ];

  cuteProducts = [
    { title: 'Stuffed Bear', description: 'A cute stuffed bear for kids', price: 79, imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Lego Set', description: 'A fun lego set for kids', price: 249, imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Kite', description: 'A colorful kite for kids', price: 59, imageUrl: 'https://via.placeholder.com/150' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
