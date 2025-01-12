import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor, *ngIf, and pipes

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent {
  // Define card fields
  cardNumber: string[] = ['', '', '', '']; // Store card number in 4 parts
  cardHolder: string = ''; // Store card holder name
  expirationMonth: string = ''; // Store expiration month
  expirationYear: string = ''; // Store expiration year
  ccv: string = ''; // Store CCV number

  // Validation messages
  cardNumberError: string = '';
  cardHolderError: string = '';
  expirationError: string = '';
  ccvError: string = '';

  // Options for expiration month and year
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = ['2025', '2026', '2027', '2028'];

  // Focus handler for CCV input
  onCcvFocus(): void {
    document.querySelector('.credit-card-box')?.classList.add('hover');
  }

  // Blur handler for CCV input
  onCcvBlur(): void {
    document.querySelector('.credit-card-box')?.classList.remove('hover');
  }

  // Card number change handler
  onCardNumberChange(): void {
    this.cardNumberError = '';
    const cardNumber = this.cardNumber.join('');
    if (cardNumber.length === 16) {
      this.cardNumberError = '';
    } else if (cardNumber.length > 16) {
      this.cardNumberError = 'Card number should be 16 digits';
    }
    document.querySelector('.credit-card-box .number')!.innerHTML = this.cardNumber.join(' ').trim();
  }

  // Card holder change handler
  onCardHolderChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    document.querySelector('.credit-card-box .card-holder')!.innerHTML = inputElement.value;
  }

  // Expiration date change handler
  onCardExpirationChange(): void {
    const monthElement = document.getElementById('expiration-month') as HTMLSelectElement;
    const yearElement = document.getElementById('expiration-year') as HTMLSelectElement;

    const month = monthElement.value.padStart(2, '0');
    const year = yearElement.value.substr(2, 2);

    document.querySelector('.card-expiration-date')!.innerHTML = `${month}/${year}`;
  }

  // Validate card number
  validateCardNumber(): boolean {
    const cardNumber = this.cardNumber.join('');
    if (cardNumber.length !== 16) {
      this.cardNumberError = 'Card number should be 16 digits';
      return false;
    }
    this.cardNumberError = '';
    return true;
  }

  // Validate card holder name
  validateCardHolder(): boolean {
    if (!this.cardHolder) {
      this.cardHolderError = 'Card holder name is required';
      return false;
    }
    this.cardHolderError = '';
    return true;
  }

  // Validate expiration date
  validateExpirationDate(): boolean {
    if (!this.expirationMonth || !this.expirationYear) {
      this.expirationError = 'Expiration date is required';
      return false;
    }
    this.expirationError = '';
    return true;
  }

  // Validate CCV
  validateCcv(): boolean {
    if (this.ccv.length !== 3) {
      this.ccvError = 'CCV should be 3 digits';
      return false;
    }
    this.ccvError = '';
    return true;
  }

  // Form submission handler
  onSubmit(): void {
    const isCardNumberValid = this.validateCardNumber();
    const isCardHolderValid = this.validateCardHolder();
    const isExpirationValid = this.validateExpirationDate();
    const isCcvValid = this.validateCcv();

    if (isCardNumberValid && isCardHolderValid && isExpirationValid && isCcvValid) {
      alert('Purchase completed!');
      // Proceed with your purchase logic here
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
