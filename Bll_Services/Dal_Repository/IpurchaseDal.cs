using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository
{
  public interface IpurchaseDal
  {
     public Task InsertPurchaseAsync(Dto_common_Entities.purchaseDto purchase);
  }
}
