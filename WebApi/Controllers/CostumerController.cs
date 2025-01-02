using Bll_Services;
using Dal_Repository.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostumerController : ControllerBase
    {
        private readonly IcustomerBll customerBll;

        public CostumerController(IcustomerBll customerBll)
        {
            this.customerBll = customerBll;
        }

        [HttpPost]
        [Route("InsertCustomer")]
        public async Task<IActionResult> InsertCustomerAsync([FromBody] Dto_common_Entities.customerDto cc)
        {
            if (cc == null)
            {
                return BadRequest(new { message = "Invalid customer data." });
            }

            await customerBll.InsertCustomerAsync(cc);
            return Ok(new { message = "Customer inserted successfully." });
        }

        [HttpPost]
        [Route("api/[controller]/{password}")]
        public ActionResult Get(string password, string name)
        {
            var customer = customerBll.GetByPassword(password, name);

            if (customer == null || !customer.Any())
            {
                return NotFound(new { message = "Please open an account." });
            }
            return Ok(new { message = $"Hello, {name}!" });
        }
    }
}