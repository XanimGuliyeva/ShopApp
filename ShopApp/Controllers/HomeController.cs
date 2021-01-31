using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ShopApp.Models;
using System.Collections.Generic;
using ShopApp.ViewModels;
using System;
using System.Diagnostics;   
using System.Linq;
using System.Threading.Tasks;
using ShopApp.Data;

namespace ShopApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private ApplicationDbContext _context { get; set; }
        public object Category { get; private set; }

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext applicationDbContext)
        {
            _logger = logger;
            _context = applicationDbContext;
        }

        public IActionResult Index(int? id,string SearchTerm)
        {
            var prolist = _context.Products.AsQueryable();
            prolist = id.HasValue ?
                _context.Products.Where(x => x.CategoryId ==id) :
                _context.Products;
            if (!string.IsNullOrEmpty(SearchTerm))
            {
                prolist = prolist.Where(p => p.Name.Contains(SearchTerm));
            }
            ProductWithCategoryVM vm = new()
            {
                Categories = _context.Categories.ToList(),
                Products = prolist.ToList(),
                SearchTerm = SearchTerm,
                CategoryId = id.Value,
            };
            return View(vm);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
