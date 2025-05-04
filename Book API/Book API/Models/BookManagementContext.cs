using Microsoft.EntityFrameworkCore;

namespace Book_API.Models
{
    public class BookManagementContext : DbContext
    {
        public BookManagementContext(DbContextOptions<BookManagementContext> options) : base(options) { }
        public DbSet<Book> Book { get; set; }
    }
}
