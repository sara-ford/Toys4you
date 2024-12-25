import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toys4you'; isUserSignedIn: boolean = false;
  Name: string = '';

  constructor(private router: Router) {
    // בודק אם יש שם משתמש ב-localStorage
    const userName = sessionStorage.getItem('userName');
    if (userName) {
      this.isUserSignedIn = true;
      this.Name = userName;
    }
  }

  // logOut(): void {
  //   localStorage.removeItem('userName');  // מחיקת שם המשתמש
  //   this.isUserSignedIn = false;  // עדכון המצב בתפריט
  //   this.router.navigate(['/home']);  // מעביר לדף הבית
  // }
}


