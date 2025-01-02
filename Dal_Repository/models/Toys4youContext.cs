using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Dal_Repository.models;

public partial class Toys4youContext : DbContext
{
    public Toys4youContext()
    {
    }

    public Toys4youContext(DbContextOptions<Toys4youContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<CategoryLookup> CategoryLookups { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<CompanyLookup> CompanyLookups { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Purchase> Purchases { get; set; }

    public virtual DbSet<Purchasedetail> Purchasedetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=BSIATSDISHMAYA\\SQLEXPRESS;Database=toys4you;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Hebrew_100_CI_AS");

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("pk_categories");

            entity.ToTable("categories");

            entity.Property(e => e.CategoryId).HasColumnName("categoryId");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<CategoryLookup>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("pk_category_lookup");

            entity.ToTable("category_lookup");

            entity.Property(e => e.CategoryId)
                .ValueGeneratedNever()
                .HasColumnName("categoryId");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("categoryName");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("pk_companies");

            entity.ToTable("companies");

            entity.Property(e => e.CompanyId).HasColumnName("companyId");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<CompanyLookup>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("pk_company_lookup");

            entity.ToTable("company_lookup");

            entity.Property(e => e.CompanyId)
                .ValueGeneratedNever()
                .HasColumnName("companyId");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("companyName");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("pk_customers");

            entity.ToTable("customers");

            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.DateOfBirth).HasColumnName("dateOfBirth");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone).HasColumnName("phone");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("pk_products");

            entity.ToTable("products");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.Categoryid).HasColumnName("categoryid");
            entity.Property(e => e.Companyid).HasColumnName("companyid");
            entity.Property(e => e.Datelastupdate).HasColumnName("datelastupdate");
            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Picture)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("picture");
            entity.Property(e => e.Price).HasColumnName("price");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.Categoryid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_products_categories");

            entity.HasOne(d => d.Company).WithMany(p => p.Products)
                .HasForeignKey(d => d.Companyid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_products_companies");
        });

        modelBuilder.Entity<Purchase>(entity =>
        {
            entity.HasKey(e => e.PurchaseId).HasName("pk_purchases");

            entity.ToTable("purchases");

            entity.Property(e => e.PurchaseId).HasColumnName("purchaseId");
            entity.Property(e => e.Comments)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("")
                .HasColumnName("comments");
            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.DateOfpurchase).HasColumnName("dateOfpurchase");
            entity.Property(e => e.SumToPay).HasColumnName("sumToPay");

            entity.HasOne(d => d.Customer).WithMany(p => p.Purchases)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_purchases_customers");
        });

        modelBuilder.Entity<Purchasedetail>(entity =>
        {
            entity.HasKey(e => e.PurchaseDetailsId).HasName("pk_purchasedetails");

            entity.ToTable("purchasedetails");

            entity.Property(e => e.PurchaseDetailsId).HasColumnName("purchaseDetailsId");
            entity.Property(e => e.Amount)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("amount");
            entity.Property(e => e.ProductId).HasColumnName("productId");
            entity.Property(e => e.PurchaseId).HasColumnName("purchaseId");

            entity.HasOne(d => d.Product).WithMany(p => p.Purchasedetails)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_purchasedetails_products");

            entity.HasOne(d => d.Purchase).WithMany(p => p.Purchasedetails)
                .HasForeignKey(d => d.PurchaseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_purchasedetails_purchases");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
