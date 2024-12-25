export class ModelPurchaseDetails {
    purchaseDetailsId:number
    purchaseId:number
    productId:number
    amount:number
   
    
    constructor(purchaseDetailsId:number,purchaseId:number, productId:number, amount:number){
        this.purchaseDetailsId=purchaseDetailsId,
        this.purchaseId=purchaseId,
        this.amount=amount,
        this.productId=productId
    }
}
