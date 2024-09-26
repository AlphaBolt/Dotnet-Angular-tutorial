using System;
using CoreWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreWebApi.Database
{
    public class UserDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=LP-TZD-0X119564;Initial Catalog=Pract_UserDB_1;integrated security=true;multipleactiveresultsets=True;Encrypt=False");
        }
        public DbSet<User> Users {get; set; }
        public DbSet<Product> Products {get; set; }
    }
}