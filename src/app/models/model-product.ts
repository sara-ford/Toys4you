export class ModelProduct {
    id: number
    name: string
    categoryId: number
    companyId: number
    description: string
    price: number
    picture: string
    dateLastUpdate: Date
    age:number


    constructor(id: number, name: string, categoryId: number, companyId: number
        , description: string
        , price: number
        , picture: string
        , dateLastUpdate: Date,
        age:number) 
        {
         this.id = id,
         this.name = name
         this.categoryId=categoryId
         this.companyId=companyId
         this.dateLastUpdate=dateLastUpdate
         this.description=description
         this.price=price
         this.picture=picture
         this.age=age
    }
}
