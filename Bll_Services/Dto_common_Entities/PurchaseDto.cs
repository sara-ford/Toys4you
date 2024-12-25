using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_common_Entities
{
  public class purchaseDto
  {

    public int CustomerId { get; set; }

    public int SumToPay { get; set; }
    

    public string Comments { get; set; } = null!;

  }
}
