using Dal_Repository.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository
{
  public class purchaseDal:IpurchaseDal
  {


      public async  Task InsertPurchaseAsync(Dto_common_Entities.purchaseDto purchase)
    {
      using (Toys4youContext db = new Toys4youContext())
      {
        var c =  db.Purchases.Add(modelsConverters.purchaseConverters.ToPurchaseModel(purchase));
       await db.SaveChangesAsync();
      }
    }
  }
}
