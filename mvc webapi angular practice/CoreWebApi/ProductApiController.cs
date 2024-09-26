using System;
using CoreWebApi.Functionality;
using CoreWebApi.Models;
using CoreWebApi.Service;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductApiController : ControllerBase
    {
        IProductOperation productOperation;
        public ProductApiController()
        {
            productOperation = new ProductService();
        }

        [HttpPost("productAdd")]
        public IActionResult productAdd(Product product)
        {
            int add = productOperation.addProduct(product);
            return Ok(add);
            // if(add > 0)
            // {
            //     return Ok("product added successfully");
            // }
        }

        [HttpGet("productDetails")]
        public IActionResult getDetails()
        {
            var result = productOperation.GetProducts();
            return Ok(result);
        }

        // [HttpDelete("deleteProduct/{ID}")]
        [HttpPost("deleteProduct/{ID}")]
        public IActionResult deleteProduct(int ID)
        {
            int delete = productOperation.deleteProduct(ID);
            return Ok(delete);
        }

        // [HttpPost("updateProduct")]
        [HttpPost("updateProduct/{ID}")]
        public IActionResult updateProduct(int ID, ProductDTO productDTO)
        {
            int update = productOperation.updateProduct(ID, productDTO.ProductName, productDTO.ProductDescription, productDTO.ProductPrice);
            return Ok(update);
        }

    }
}