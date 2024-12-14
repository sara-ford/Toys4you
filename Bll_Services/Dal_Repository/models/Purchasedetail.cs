using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Purchasedetail
{
    public int PurchaseDetailsId { get; set; }

    public int ProductId { get; set; }

    public int PurchaseId { get; set; }

    public string Amount { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;

    public virtual Purchase Purchase { get; set; } = null!;
}
