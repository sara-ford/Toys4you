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
  logIn(){
    
  }
  
      // logIn(ModelCustomer.name:string,ModelCustomer.password,ModelCustomer.data) {
      //   // בודק אם כל השדות מלאים לפני שמבצע את השליחה
      //   if (this.customer.name && this.customer.phone && this.customer.email && this.customer.value) {
      //     this.toysService.insertCustomer(this.customer).subscribe(
      //       (response) => {
      //         console.log('Customer added successfully:', response);
      //       },
      //       (error) => {
      //         console.error('Error adding customer:', error);
      //       }
      //     );
      //   } else {
      //     alert('Please fill in all fields.');
      //   }
      // }
    
    
  }

