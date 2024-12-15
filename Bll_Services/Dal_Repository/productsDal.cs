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
                var l = db.Products.ToList();
                return modelsConverters.productsConverters.ToProductDtoList(l);
            }
        }
        //public List<Dto_common_Entities.productsDto> GetById(string pass)
        //{
        //    using (Toys4youContext db = new Toys4youContext())
        //    {
        //        var l = db.Customers.FirstOrDefault(a => a.Password == a.Password);
        //        return modelsConverters.productsConverters.ToProductDtoList(l);
        //    }
        //}
    }
}




