export class ModelProduct {
    id: number
    name: string
    categoryid: number
    companyid: number
    description: string
    price: number
    picture: string
    dateLastUpdate: Date
    age:number
    amount:number
    category: string 
    company: string 


    constructor(id: number, name: string, categoryid: number, companyid: number
        , description: string
        , price: number
        , picture: string
        , dateLastUpdate: Date,
        age:number, amount:number,
        category:string,
        company:string
    ) 
        {
         this.id = id,
         this.name = name
         this.categoryid=categoryid
         this.companyid=companyid
         this.dateLastUpdate=dateLastUpdate
         this.description=description
         this.price=price
         this.picture=picture
         this.age=age
         this.amount=amount
         this.company=company
         this.category=category
    }
}
