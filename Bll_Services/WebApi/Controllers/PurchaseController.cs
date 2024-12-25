using Bll_Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PurchaseController : ControllerBase
  {
     IpurchaseBll p;


      public PurchaseController(IpurchaseBll p)
    {
      this.p = p;
    }


    [HttpPost("InsertPurchase")]
    public async Task InsertPurchaseAsync(Dto_common_Entities.purchaseDto pc)
    {
      await p.InsertPurchaseAsync(pc);
    }

  }
}

