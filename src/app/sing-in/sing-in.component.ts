import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { ToysServiceService } from '../toys-service.service';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, PasswordModule, FormsModule, InputTextModule, FloatLabel, ButtonModule, DatePicker],
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'] // Note the correct property name
})
export class SingInComponent {
  constructor(private toysService: ToysServiceService) { }

  isSignIn: boolean = true;
  isMessage: boolean = false; // Initially hide the message
  Name: string;
  Phone: string;
  Email: string;
  value: string;
  date: Date | undefined;
  message: string = '';

  toggleForm() {
    this.isSignIn = !this.isSignIn;
    this.isMessage = false; // Hide the message when toggling forms
  }

  signIn() {
    this.toysService.getCustomerByPassword(this.value, this.Name).subscribe(
      (response) => {
        if (response?.message) {
          this.message = response.message;
          this.isMessage = true; // Show the message
        }
      },
      (error) => {
        const errorMessage = error.error?.message || "No account found with this name and password.";
        this.message = errorMessage;
        this.isMessage = true; // Show the message

        // Switch to log-in page after showing the error message
        setTimeout(() => {
          this.toggleForm();
        }, 3000); // Delay for 3 seconds
      }
    );
  }

  logIn() {
    // Logic for log-in
  }
}
