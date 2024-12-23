using Dal_Repository.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Diagnostics.Metrics;
using System;
using Dal_Repository.modelsConverters;

namespace Dal_Repository

{
    public class productsDal
    {
        public List<Dto_common_Entities.productsDto> SelectAll()
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var l = db.Products.Include(a => a.Company).Include(a => a.Category).ToList();
                return modelsConverters.productsConverters.ToProductDtoList(l);
            }
        }
        public List<Dto_common_Entities.productsDto> SortByCategory(int categoryId)
        {
            using (Toys4youContext db = new Toys4youContext())
            {
                var products = db.Products
                                 .Where(p => p.Categoryid == categoryId).Include(a => a.Company).Include(a => a.Category)
                                 .ToList();
                return modelsConverters.productsConverters.ToProductDtoList(products);
            }

        }




    }
}




