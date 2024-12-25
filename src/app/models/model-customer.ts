export class ModelCustomer {
  Name: string;
  Phone: number;
  Email: string;
  DateOfBirth: string; 
  Password: string;

  constructor(name: string, phone: string, email: string, dateOfBirth: Date, password: string) {
    this.Name = name;
    this.Phone = parseInt(phone); 
    this.Email = email;
    this.DateOfBirth = dateOfBirth.toISOString().split('T')[0];  
    this.Password = password;
  }
}
