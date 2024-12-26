namespace Dal_Repository
{
    public interface IcustomerDal
    {
        Task InsertCustomerAsync(Dto_common_Entities.customerDto customer);
        List<Dto_common_Entities.customerDto> GetByPassword(string password, string name);
    }
}
