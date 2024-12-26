using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.modelsConverters
{
    public class purchaseConverters
    {
        public static models.Purchase ToPurchaseModel(Dto_common_Entities.purchaseDto p)
        {
            models.Purchase pp = new models.Purchase();
            pp.CustomerId = p.CustomerId;
            pp.SumToPay = p.SumToPay;
            pp.Comments = p.Comments ?? "";

            return pp;
        }
    }

}
