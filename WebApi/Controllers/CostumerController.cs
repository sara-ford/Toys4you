using Bll_Services;
using Dal_Repository.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostumerController : ControllerBase
    {
        IcustomerBll c;
        public CostumerController(IcustomerBll c)
        {
            this.c = c;
        }

        [HttpPost]
        [Route("InsertCustomer")]
        public async Task<IActionResult> InsertCustomerAsync([FromBody] Dto_common_Entities.customerDto cc)
        {
            if (cc == null)
            {
                return BadRequest(new { message = "Invalid customer data." });
            }

            await c.InsertCustomerAsync(cc);
            return Ok(new { message = "Customer inserted successfully." });
        }


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
    }
}
