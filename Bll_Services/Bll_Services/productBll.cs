using Dal_Repository.models;

namespace Bll_Services
{
    public class productBll
    {
        public  List<Dto_common_Entities.productsDto> SelectAll()
        {
            Dal_Repository.productsDal a = new Dal_Repository.productsDal();
            return a.SelectAll();
        }
        public List<Dto_common_Entities.productsDto> SortByCategory(int categoryId)
        {
            Dal_Repository.productsDal a = new Dal_Repository.productsDal();
            var products = a.SortByCategory(categoryId);
            return products;
        }



    }
}
