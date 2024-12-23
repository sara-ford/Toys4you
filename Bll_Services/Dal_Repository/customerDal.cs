using Dal_Repository.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository
{
    public class customerDal
    {
        public List<Dto_common_Entities.customerDto> GetByPassword(string password, string name)
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var customers = db.Customers.Where(c => c.Password == password && c.Name == name).ToList();

                return customers.Select(c => modelsConverters.customerConverters.ToCustomerDto(c)).ToList();
            }
        }
        public void InsertCustomer(Dto_common_Entities.customerDto customer)
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var c = db.Customers.Add(modelsConverters.customerConverters.ToCustomerModel(customer));
                db.SaveChanges();
            }
        }
    }
}
