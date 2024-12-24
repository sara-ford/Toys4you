import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { ToysServiceService } from '../toys-service.service';
import { ModelCustomer } from '../models/model-customer';

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
  phone: string;
  Email: string;
  Password: string;
  DateOfBirth: Date;
  message: string = '';
  num:number;

  toggleForm() {
    this.isSignIn = !this.isSignIn;
    this.isMessage = false; 
  }

  signIn() {
    this.toysService.getCustomerByPassword(this.Password, this.Name).subscribe(
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
    const customer = new ModelCustomer(
      this.Name,
      this.phone.toString(),  // Ensure phone is a string
      this.Email,
      this.DateOfBirth, 
      this.Password
    );
  
    console.log('Customer data:', customer); // Log the customer data for debugging
  
    this.toysService.insertCustomer(customer).subscribe(
      response => {
        alert('נרשמת בהצלחה'); // "Successfully registered" in Hebrew
      },
      error => {
        console.error('Error inserting customer', error); // Log the error for debugging
        alert('An error occurred: ' + error.message);
      }
    );
  }
  
}
    
  

