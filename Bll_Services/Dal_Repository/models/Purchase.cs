using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Purchase
{
    public int PurchaseId { get; set; }

    public int CustomerId { get; set; }

    public int SumToPay { get; set; }

    public string Comments { get; set; } = null!;

    public DateOnly? DateOfpurchase { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<Purchasedetail> Purchasedetails { get; set; } = new List<Purchasedetail>();
}
