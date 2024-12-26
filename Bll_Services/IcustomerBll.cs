using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
    public interface IcustomerBll
    {
        public interface IcustomerBll
        {
            Task InsertCustomerAsync(Dto_common_Entities.customerDto customer);

            List<Dto_common_Entities.customerDto> GetByPassword(string password, string name);
        }


    }
}
