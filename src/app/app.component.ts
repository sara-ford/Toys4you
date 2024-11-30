import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';  // הוספת רכיבי ניתוב
import { CommonModule } from '@angular/common';  // הוספת CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // קומפוננטה עצמאית
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],  // הוספת כל המודולים הדרושים
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toys4you';
}
