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
  styleUrls: ['./sing-in.component.css'] 
})
export class SingInComponent {
  constructor(private toysService: ToysServiceService) { }

  isSignIn: boolean = true;
  isMessage: boolean = false; 
  Name: string;
  Phone: string;
  Email: string;
  value: string;
  date: Date;
  message: string = '';
  DateOfBirth: string = '';  // Declare DateOfBirth
  Password: string = '';     // Declare Password


  logIn() {
    // Now the properties are correctly defined
    const customer = new ModelCustomer(
      this.Name,
      this.Phone,
      this.Email,
      this.DateOfBirth,  // Ensure this is a string like "YYYY-MM-DD"
      this.Password
    );

    // Call the service to insert the customer
    this.toysService.insertCustomer(customer).subscribe(response => {
      alert('נרשמת בהצלחה');
    }, error => {
      alert('An error occurred: ' + error.message);
    });
  }
  toggleForm() {
    this.isSignIn = !this.isSignIn;
    this.isMessage = false; 
  }

  signIn() {
    this.toysService.getCustomerByPassword(this.value, this.Name).subscribe(
      (response) => {
        if (response?.message) {
          this.message = response.message;
          this.isMessage = true; 
          sessionStorage.setItem('userName', this.Name); 

        }
      },
      (error) => {
        const errorMessage = error.error?.message || "No account found with this name and password.";
        this.message = errorMessage;
        this.isMessage = true; 

  
        setTimeout(() => {
          this.toggleForm();
        }, 500); 
      }
    );
  }

  logIn() {
    this.toysService.insertCustomer(this.value,this.Name,this.date,this.Email,this.Phone)
    alert("נרשמת בהצלחה")


  }
}
