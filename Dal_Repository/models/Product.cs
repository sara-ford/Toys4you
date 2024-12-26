using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Categoryid { get; set; }

    public int Companyid { get; set; }

    public int Age { get; set; }

    public string Description { get; set; } = null!;

    public DateOnly? Datelastupdate { get; set; }

    public string Picture { get; set; } = null!;

    public int Price { get; set; }

    public int Amount { get; set; }

    public virtual Category Category { get; set; } = null!;

    public virtual Company Company { get; set; } = null!;

    public virtual ICollection<Purchasedetail> Purchasedetails { get; set; } = new List<Purchasedetail>();
}
