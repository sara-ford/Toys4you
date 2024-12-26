import { Component } from '@angular/core';
import { ToysServiceService } from '../toys-service.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  constructor(
    private toysService: ToysServiceService,
  ) { }
  ngOnInit(): void {
    // Simulate the CodePen tile preview focus on CCV
    setTimeout(() => {
      const ccvInput = document.getElementById('card-ccv') as HTMLInputElement;
      if (ccvInput) {
        ccvInput.focus();
        setTimeout(() => {
          ccvInput.blur();
        }, 1000);
      }
    }, 500);
  }

  onCardNumberChange(event: any): void {
    const inputElements = document.querySelectorAll('.input-cart-number') as NodeListOf<HTMLInputElement>;
    let cardNumber = '';

    inputElements.forEach((input: HTMLInputElement, index: number) => {
      cardNumber += input.value + ' ';
      if (input.value.length === 4 && index < inputElements.length - 1) {
        inputElements[index + 1].focus();
      }
    });

    document.querySelector('.credit-card-box .number')!.innerHTML = cardNumber.trim();
  }

  onCardHolderChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    document.querySelector('.credit-card-box .card-holder div')!.innerHTML = inputElement.value;
  }

  onCardExpirationChange(): void {
    const monthElement = document.getElementById('card-expiration-month') as HTMLSelectElement;
    const yearElement = document.getElementById('card-expiration-year') as HTMLSelectElement;

    const month = monthElement.value.padStart(2, '0');
    const year = yearElement.value.substr(2, 2);

    document.querySelector('.card-expiration-date div')!.innerHTML = `${month}/${year}`;
  }

  onCcvFocus(): void {
    document.querySelector('.credit-card-box')!.classList.add('hover');
  }

  onCcvBlur(): void {
    document.querySelector('.credit-card-box')!.classList.remove('hover');
  }

  onCcvChange(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    document.querySelector('.ccv div')!.innerHTML = inputElement.value;
  }


  //  purchase(){
  // // this.toysService.cartlist
  // console.log("m");
  
  //  }


}
