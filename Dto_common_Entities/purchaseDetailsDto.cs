using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_common_Entities
{
  public class purchaseDetailsDto
  {
    //public int PurchaseDetailsId { get; set; }

    public int ProductId { get; set; }

    public int PurchaseId { get; set; }

    public string Amount { get; set; } = null!;

  }
}
