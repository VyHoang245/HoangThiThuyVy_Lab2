using Book_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Book_API.Controllers
{
    public class BookController : Controller
    {
        private readonly BookManagementContext _context;
        public BookController(BookManagementContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var books = _context.Book.ToList();
            return View(books ?? new List<Book>());
        }

        [HttpGet("getList")]
        public async Task<IActionResult> GetListAllowance()
        {
            var books = _context.Book.ToList();
            return Ok(books);
        }
    }
}
