using Bll_Services;
using Dal_Repository;
using Dal_Repository.models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<Toys4youContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YourConnectionString")));

// Register BLL and DAL services
builder.Services.AddScoped<IpurchaseBll, purchaseBll>();
builder.Services.AddScoped<IpurchaseDal, purchaseDal>();
builder.Services.AddScoped<IcustomerBll, customerBll>();
builder.Services.AddScoped<IcustomerDal, customerDal>();


// Add controllers
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy for specific origins
builder.Services.AddCors(a => a.AddPolicy("AllowAll", builder => {
    builder.WithOrigins("http://localhost:4200")
           .AllowAnyMethod()
           .AllowAnyHeader();
}));

// Add logging service (this is automatically handled, but just in case you want to configure logging specifically)
builder.Services.AddLogging();

var app = builder.Build();

// Configure the HTTP request pipeline.
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
