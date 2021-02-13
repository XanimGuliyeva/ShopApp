using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services;
using ShopApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Controllers
{
    public class Products : Controller
    {
        private readonly ILogger<Products> _logger;
        private ProductService _productService;
        private CategoryService _categoryService;

        public Products(ILogger<Products> logger, ApplicationDbContext applicationDbContext)
        {
            _productService = new ProductService(applicationDbContext);
            _logger = logger;
            _categoryService = new CategoryService(applicationDbContext);
        }

        public IActionResult Index(int? id, string SearchTerm, int? SortBy)
        {
            ProductWithCategoryVM vm = new ProductWithCategoryVM()
            {
                Categories = _categoryService.GetCategories(),
                Products = _productService.SearchProductFilter(id, SearchTerm, SortBy),
                SearchTerm = SearchTerm,
                CategoryId = id,
                SortBy = SortBy,
            };
            return View(vm);
        }

        
    }
}
