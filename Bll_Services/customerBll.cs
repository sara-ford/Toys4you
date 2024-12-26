using Dal_Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
    public class customerBll:IcustomerBll
    {
        IcustomerDal IcustomerDal;
        public customerBll(IcustomerDal dal)
        {
            IcustomerDal = dal;
        }
        public async Task InsertCustomerAsync(Dto_common_Entities.customerDto customer)
        {
           await IcustomerDal.InsertCustomerAsync(customer);
             }   
        public List<Dto_common_Entities.customerDto?> GetByPassword(string password, string name)
        {
            Dal_Repository.customerDal c = new Dal_Repository.customerDal();
            return c.GetByPassword(password, name);
        }
    }
}
