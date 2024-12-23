using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostumerController : ControllerBase
    {
        [HttpPost]
        [Route("api/[controller]/{password}")]
        public ActionResult Get(string password, string name)
        {
            Bll_Services.customerBll c = new Bll_Services.customerBll();
            var customer = c.GetByPassword(password, name);

            if (customer == null || !customer.Any())
            {
                return NotFound(new { message = "Please open an account." });
            }

            return Ok(new { message = $"Hello, {name}!" });
        }
        [HttpPost]
        [Route("InsertCustomer")]
        public void InsertCustomer( [FromBody] Dto_common_Entities.customerDto c)
        {
            Bll_Services.customerBll customer = new Bll_Services.customerBll();
            customer.InsertCustomer(c);

        }
    }
}
