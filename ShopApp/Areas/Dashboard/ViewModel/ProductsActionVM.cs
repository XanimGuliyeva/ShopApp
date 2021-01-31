using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Areas.Dashboard.ViewModel
{
    public class ProductsActionVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public short Quantity { get; set; }
        public int CategoryId { get; set; }
        public decimal Discount { get; set; }
        public IFormFile PictureUrl { get; set; }
    }
}
