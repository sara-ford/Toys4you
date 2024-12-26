using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.modelsConverters
{
  public class purchaseDetailsConverters
  {
    public static models.Purchasedetail ToPurchaseDetailsModel(Dto_common_Entities.purchaseDetailsDto P)
    {
      models.Purchasedetail pp = new  models.Purchasedetail();
      pp.PurchaseId = P.PurchaseId;
      pp.ProductId = P.ProductId;
      pp.Amount=P.Amount;
      //pp.PurchaseDetailsId=P.PurchaseDetailsId;

      return pp;
    }
  }
}
