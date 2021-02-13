using Data;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class CategoryService
    {
        public ApplicationDbContext _contect;
        public CategoryService(ApplicationDbContext context)
            {
            _contect = context;
            }
        public List<Category> GetCategories() {
            return _contect.Categories.ToList();
        }
    }
}
