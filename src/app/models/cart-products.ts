import { ProductsComponent } from "../products/products.component"
import { ModelProduct } from "./model-product"

export class CartProducts {
    amount:number
    product:ModelProduct
    totalPrice:number

    constructor(amount:number,product:ModelProduct,totalPrice:number) 
        {
         this.amount=amount
         this.product=product
         this.totalPrice=totalPrice
    }
}

