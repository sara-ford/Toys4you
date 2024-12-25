using Dal_Repository.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository
{
  public class purchaseDetailsDal
  {
    public void InsertPurchaseDetails(Dto_common_Entities.purchaseDetailsDto p)
    {
      using (Toys4youContext db = new Toys4youContext())
      {
        var pd = db.Purchasedetails.Add(modelsConverters.purchaseDetailsConverters.ToPurchaseDetailsModel(p));
        db.SaveChanges();
      }
    }
  }
}
