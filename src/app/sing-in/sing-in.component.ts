import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Router } from '@angular/router'; // Import Router
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
  constructor(private toysService: ToysServiceService, private router: Router) { } // Inject Router

  isSignIn: boolean = true;
  isMessage: boolean = false;
  Name: string;
  phone: string;
  Email: string;
  Password: string;
  DateOfBirth: Date;
  message: string = '';
  num: number;

  toggleForm() {
    this.isSignIn = !this.isSignIn;
    this.isMessage = false;
  }

  signIn() {
    this.toysService.getCustomerByPassword(this.Password, this.Name).subscribe(
      (response) => {

        if (response[0] && response[0].customerId) {
          sessionStorage.setItem('id',response[0].customerId)
          // this.message = response.message;
          this.isMessage = true;
          sessionStorage.setItem('userName', this.Name);
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
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
      this.phone.toString(),
      this.Email,
      this.DateOfBirth,
      this.Password
    );

    this.toysService.insertCustomer(customer).subscribe(
      response => {
        console.log('Customer inserted successfully', response);
      },
      error => {
        console.error('Error inserting customer', error);
      }
    );
  }
}