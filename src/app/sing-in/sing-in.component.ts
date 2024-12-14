import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {DatePicker} from 'primeng/datepicker';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule,PasswordModule,FormsModule,InputTextModule,FloatLabel,ButtonModule,DatePicker],
  templateUrl:'./sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
  isSignIn: boolean = true; 
  Name: string;
  Phone: string;
  Email: string;
  value: string;
  date: Date | undefined

  toggleForm() {
    this.isSignIn = !this.isSignIn; 
  }
  signIn(){

  }
  logIn(){

  }
}

