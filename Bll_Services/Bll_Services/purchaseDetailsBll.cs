using Dal_Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
  public class purchaseDetailsBll
  {
    public void InsertPurchaseDetails(Dto_common_Entities.purchaseDetailsDto purchaseDetails)
    {
      Dal_Repository.purchaseDetailsDal d = new Dal_Repository.purchaseDetailsDal();

      d.InsertPurchaseDetails(purchaseDetails);
    }
  }
}
