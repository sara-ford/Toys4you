using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
  public interface IpurchaseBll
  {
    public Task InsertPurchaseAsync(Dto_common_Entities.purchaseDto purchase);
  }
}
