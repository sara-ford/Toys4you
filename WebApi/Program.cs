using Bll_Services;
using Dal_Repository;
using Dal_Repository.models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<Toys4youContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));

builder.Services.AddScoped<IpurchaseBll, purchaseBll>();
builder.Services.AddScoped<IpurchaseDal, purchaseDal>();
builder.Services.AddScoped<IcustomerBll, customerBll>();
builder.Services.AddScoped<IcustomerDal, customerDal>();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(a => a.AddPolicy("AllowAll", builder => {
    builder.WithOrigins("http://localhost:4200")
           .AllowAnyMethod()
           .AllowAnyHeader();
}));

builder.Services.AddLogging();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
