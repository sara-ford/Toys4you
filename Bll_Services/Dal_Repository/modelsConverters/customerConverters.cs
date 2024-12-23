using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.modelsConverters
{
    internal class customerConverters
    {
        public static Dto_common_Entities.customerDto ToCustomerDto(models.Customer c)
        {
            Dto_common_Entities.customerDto cc = new Dto_common_Entities.customerDto();
            cc.Password = c.Password;   
            cc.Name = c.Name;
            cc.Email = c.Email;
            cc.Phone = c.Phone;
            cc.DateOfBirth = c.DateOfBirth;
            return cc;
        }
        public static models.Customer  ToCustomerModel(Dto_common_Entities.customerDto c)
        {
            models.Customer cc = new models.Customer();
            cc.Password = c.Password;
            cc.Name = c.Name;
            cc.Email = c.Email;
            cc.Phone = c.Phone;
            cc.DateOfBirth = c.DateOfBirth;
            return cc;
        }

    }
}
