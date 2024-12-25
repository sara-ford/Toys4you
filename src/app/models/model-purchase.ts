export class ModelPurchase {
    purchaseId?:number
    customerId: number             
    dateOfpurchase?:number
    sumToPay:number
    comments:string

    constructor( purchaseId:number, customerId: number, dateOfpurchase:number,  sumToPay:number,comments:string){
        this.purchaseId=purchaseId,
        this.customerId=customerId,
        this. dateOfpurchase=dateOfpurchase,
        this.sumToPay=sumToPay
        this.comments=comments
    }
}
