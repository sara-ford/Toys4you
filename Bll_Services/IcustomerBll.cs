using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bll_Services
{
    public interface IcustomerBll
    {
        Task InsertCustomerAsync(Dto_common_Entities.customerDto customer);
        List<Dto_common_Entities.customerDto> GetByPassword(string password, string name);
    }
}