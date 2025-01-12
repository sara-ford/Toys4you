export class ModelPurchase {
    customerId: number;
    sumToPay: number;
    // Comments:string;
    constructor(customerId: number, sumToPay: number) {
      this.customerId = customerId;
      this.sumToPay = sumToPay;
      // this.Comments=Comments;
    }
  }
  