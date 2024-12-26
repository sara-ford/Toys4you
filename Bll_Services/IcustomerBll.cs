using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
    public interface IcustomerBll
    {
        public Task InsertCustomerAsync(Dto_common_Entities.customerDto customer);

    }
}
