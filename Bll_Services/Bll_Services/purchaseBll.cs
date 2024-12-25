using Dal_Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
  public class purchaseBll:IpurchaseBll
  {
   IpurchaseDal IpurchaseDal;
    public purchaseBll(IpurchaseDal dal)
    {
      IpurchaseDal = dal;
    }
    public async Task InsertPurchaseAsync(Dto_common_Entities.purchaseDto purchase)
    {

     await IpurchaseDal.InsertPurchaseAsync(purchase);
    }
  }
}



