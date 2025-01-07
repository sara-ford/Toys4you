export class ModelPurchase {
    // purchaseId?:number
    customerId: number             
    // dateOfpurchase?:number
    sumToPay:number
    // comments:string

    constructor(customerId: number, sumToPay:string){
        this.customerId=customerId,
        this.sumToPay = parseInt(sumToPay); 

        // this.comments=comments
        // this.purchaseId=purchaseId,
        // this. dateOfpurchase=dateOfpurchase,
    }
}
