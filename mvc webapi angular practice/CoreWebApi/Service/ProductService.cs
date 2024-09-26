using System;
using CoreWebApi.Database;
using CoreWebApi.Functionality;
using CoreWebApi.Models;

namespace CoreWebApi.Service
{
    public class ProductService : IProductOperation
    {
        UserDbContext userDbContext;
        public ProductService()
        {
            userDbContext = new UserDbContext();
        }

        int IProductOperation.addProduct(Product product)
        {
            userDbContext.Products.Add(product);
            return userDbContext.SaveChanges();
        }

        List<Product> IProductOperation.GetProducts()
        {
            var results = userDbContext.Products.ToList();
            return results;
        }

        int IProductOperation.deleteProduct(int ID)
        {
            var delete = userDbContext.Products.Where(a => a.ProductID == ID).FirstOrDefault();
            userDbContext.Products.Remove(delete);
            return userDbContext.SaveChanges();
        }

        int IProductOperation.updateProduct(int id, string name, string desc, float price)
        {
            var update = userDbContext.Products.Where(a => a.ProductID == id).FirstOrDefault();
            update.ProductName = name;
            update.ProductDescription = desc;
            update.ProductPrice = price;
            return userDbContext.SaveChanges();
        }
    }
}