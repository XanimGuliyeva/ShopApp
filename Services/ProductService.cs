using Data;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ProductService
    {
        public ApplicationDbContext _contect;
        public ProductService(ApplicationDbContext context)
            {
            _contect = context;
            }
        public List<Product> SearchProductFilter(int? id, string SearchTerm, int? SortBy) {

            var prolist = _contect.Products.AsQueryable();
            if (id.HasValue)
            {
                prolist = prolist.Where(x => x.CategoryId == id);
            }
            if (!string.IsNullOrEmpty(SearchTerm))
            {
                prolist = prolist.Where(p => p.Name.Contains(SearchTerm));
            }
            if (SortBy.HasValue)
            {
                switch (SortBy)
                {
                    case 1:
                        prolist = prolist.OrderBy(x => x.Price);
                        break;
                    case 2:
                        prolist = prolist.OrderByDescending(x => x.Price);
                        break;
                    default:
                        prolist = prolist.OrderByDescending(x => x.Id);
                        break;
                }
            }
            return prolist.ToList();
        }
    }
}
