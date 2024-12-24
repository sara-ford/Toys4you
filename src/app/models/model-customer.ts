export class ModelCustomer {
  // customerId: number
  name: string
  phone:number
  email:string
  dateOfBirth:Date
  password:string

  constructor(name: string,phone:number,email:string,dateOfBirth:Date,password:string) 
  {
      // this.customerId = customerId,
      this.name = name,
      this.email=email,
      this.phone=phone,
      this.dateOfBirth=dateOfBirth
      this.password=password
  }
}
