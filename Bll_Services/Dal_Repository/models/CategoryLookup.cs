using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class CategoryLookup
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = null!;
}
