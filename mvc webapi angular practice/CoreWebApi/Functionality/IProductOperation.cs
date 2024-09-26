using System;
using CoreWebApi.Models;

namespace CoreWebApi.Functionality
{
    public interface IProductOperation
    {
        public int addProduct(Product product);
        public int deleteProduct(int ID);
        public int updateProduct(int id, string name, string desc, float price);
        public List<Product> GetProducts();
    }
}