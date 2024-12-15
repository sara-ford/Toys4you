namespace Dal_Repository.modelsConverters
{
    internal class productsConverters
    {
        public static List<Dto_common_Entities.productsDto> ToProductDtoList(List<models.Product> lp)
        {
            List<Dto_common_Entities.productsDto> l = new List<Dto_common_Entities.productsDto>();
            foreach (models.Product p in lp)
            {
                l.Add(ToProductDto(p)); 
            }
            return l; 
        }

        public static Dto_common_Entities.productsDto ToProductDto(models.Product p)
        {
            Dto_common_Entities.productsDto pc = new Dto_common_Entities.productsDto();
            pc.Id = p.Id;
            pc.Picture = p.Picture;
            pc.Price = p.Price;
            pc.Description = p.Description;
            pc.Amount = p.Amount;
            pc.Age = p.Age;
            pc.Name = p.Name;
            pc.Companyid = p.Companyid;
            pc.Categoryid = p.Categoryid;

            return pc; 
        }
    }
}
