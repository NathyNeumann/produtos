using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Produto> Produtos { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}

public class Produto
{
    public int Id { get; set; }
    public string Nome { get; set; }
}
