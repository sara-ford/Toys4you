export class ModelPurchase {
    customerId: number;
    sumToPay: number;
    constructor(customerId: number, sumToPay: number) {
      this.customerId = customerId;
      this.sumToPay = sumToPay;
    }
  }
  