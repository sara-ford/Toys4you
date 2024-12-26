using Dal_Repository.models;
using Dto_common_Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dal_Repository
{
    public class customerDal : IcustomerDal
    {
        public async Task InsertCustomerAsync(customerDto customer)
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var c = db.Customers.Add(modelsConverters.customerConverters.ToCustomerModel(customer));
                await db.SaveChangesAsync();
            }
        }

        public List<customerDto> GetByPassword(string password, string name)
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var customers = db.Customers.Where(c => c.Password == password && c.Name == name).ToList();
                return customers.Select(c => modelsConverters.customerConverters.ToCustomerDto(c)).ToList();
            }
        }
    }
}
