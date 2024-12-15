using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public List<Dto_common_Entities.productsDto> Get()
        {
            Bll_Services.productBll p=new Bll_Services.productBll();
            return p.SelectAll();
        }
    }
}
