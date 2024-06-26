using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ProdutoController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProdutoController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produto>>> Get()
    {
        return await _context.Produtos.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Produto>> Post([FromBody] Produto produto)
    {
        _context.Produtos.Add(produto);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = produto.Id }, produto);
    }
}
