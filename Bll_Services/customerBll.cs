using Dal_Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bll_Services
{
    public class customerBll : IcustomerBll
    {
        IcustomerDal customerDal;

        public customerBll(IcustomerDal dal)
        {
            customerDal = dal;
        }

        public async Task InsertCustomerAsync(Dto_common_Entities.customerDto customer)
        {
            await customerDal.InsertCustomerAsync(customer);
        }

        public List<Dto_common_Entities.customerDto> GetByPassword(string password, string name)
        {
            return customerDal.GetByPassword(password, name);
        }
    }
}