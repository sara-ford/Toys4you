export class ModelCustomer {
 
  customerId: number
  name: string
  phone:number
  email:string
  dateOfBirth:Date

  constructor(customerId: number, name: string,phone:number,email:string,dateOfBirth:Date) 
  {
      this.customerId = customerId,
      this.name = name,
      this.email=email,
      this.phone=phone,
      this.dateOfBirth=dateOfBirth

  }
}
