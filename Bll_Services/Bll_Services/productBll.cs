namespace Bll_Services
{
    public class productBll
    {
        public  List<Dto_common_Entities.productsDto> SelectAll()
        {
            Dal_Repository.productsDal a = new Dal_Repository.productsDal();
            return a.SelectAll();
        }


        //public List<Dto_common_Entities.productsDto?> GetByPassword(string password)
        //{
        //    Dal_Repository. a = new Dal_Repository.customersDal();
        //    return a.GetByPassword(password);
        //}
    }
}
