using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShopApp.Models;
using System.Collections.Generic;
using ShopApp.ViewModels;
using System;
using System.Diagnostics;   
using System.Linq;
using System.Threading.Tasks;
using Data;
using Services;

namespace ShopApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ProductService _productService;
        private CategoryService _categoryService;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext applicationDbContext)
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
