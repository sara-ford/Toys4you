using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public string Name { get; set; } = null!;

    public long Phone { get; set; }

    public string Email { get; set; } = null!;

    public DateOnly? DateOfBirth { get; set; }

    public string Password { get; set; } = null!;

    public virtual ICollection<Purchase> Purchases { get; set; } = new List<Purchase>();
}
