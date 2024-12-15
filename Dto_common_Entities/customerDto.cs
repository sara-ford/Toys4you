using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_common_Entities
{
    public class customerDto
    {
        public int CustomerId { get; set; }

        public string Name { get; set; } = null!;

        public long Phone { get; set; }

        public string Email { get; set; } = null!;

        public DateOnly? DateOfBirth { get; set; }

        public string Password { get; set; } = null!;

    }
}
