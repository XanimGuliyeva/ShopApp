using ShopApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.ViewModels
{
    public class ProductWithCategoryVM
    {
        public List<Category> Categories { get; set; }
        public List<Product> Products { get; set; }
        public string SearchTerm { get; set; }
        public int? CategoryId { get; set; }
    }
}
