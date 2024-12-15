import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {DatePicker} from 'primeng/datepicker';
import { ToysServiceService } from '../toys-service.service';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule,PasswordModule,FormsModule,InputTextModule,FloatLabel,ButtonModule,DatePicker],
  templateUrl:'./sing-in.component.html',
  styleUrl: './sing-in.component.css'
})

export class SingInComponent {
   constructor(
      private toysService: ToysServiceService,
    ) { }
  
  isSignIn: boolean = true; 
  isMessage: boolean = true; 
  Name: string;
  Phone: string;
  Email: string;
  value: string;
  date: Date | undefined

  toggleForm() {
    this.isSignIn = !this.isSignIn; 
    this.isMessage = !this.isMessage
  }
  message: string = '';  

  signIn() {
    this.toysService.getCustomerByPassword(this.value, this.Name).subscribe(
      (response) => {
        if (response?.message) {
          this.message = response.message;
        }
      },
      (error) => {
        const errorMessage = error.error?.message; 
        this.message = errorMessage;  
        //העברה לדף הlog in
        setTimeout(() => {this.toggleForm()
        }, 500);
      }
    );
  }
  logIn(){

  }
}

