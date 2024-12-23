using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
    public class customerBll
    {
        public List<Dto_common_Entities.customerDto?> GetByPassword(string password, string name)
        {
            Dal_Repository.customerDal c = new Dal_Repository.customerDal();
            return c.GetByPassword(password, name);
        }
        public void InsertCustomer(Dto_common_Entities.customerDto customer)
        {
            Dal_Repository.customerDal c = new Dal_Repository.customerDal();
      
            c.InsertCustomer(customer);
        }
    }
}
