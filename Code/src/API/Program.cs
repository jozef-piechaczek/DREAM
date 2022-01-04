using DataAccess;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var con = builder.Configuration.GetValue<string>("ConnectionString").ToString();
var con2 = builder.Configuration.GetSection("ConnectionString").ToString();

builder.Services.AddControllers();
builder.Services.AddDbContext<DreamDbContext>(o =>
                o.UseNpgsql(con, x => x.MigrationsAssembly("DataAccess")
                    .EnableRetryOnFailure()));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();