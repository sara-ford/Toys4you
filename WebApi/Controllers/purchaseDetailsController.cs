using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class purchaseDetailsController : ControllerBase
  {
    [HttpPost]
    [Route("InsertPurchaseDetails")]
    public void InsertPurchaseDetails( Dto_common_Entities.purchaseDetailsDto p)

    {
      Bll_Services.purchaseDetailsBll pd= new Bll_Services.purchaseDetailsBll();
      pd.InsertPurchaseDetails(p);

    }
  }
}
