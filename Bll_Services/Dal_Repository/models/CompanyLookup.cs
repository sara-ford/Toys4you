using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class CompanyLookup
{
    public int CompanyId { get; set; }

    public string CompanyName { get; set; } = null!;
}
