using BackOffice.API.Models;
using BackOffice.API.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Controllers
{
  [Route("api/[controller]")]
  public class NavbarController : Controller
  {
    private IConfiguration _configuration;
    private readonly string DbConn;

    public NavbarController(IConfiguration configuration)
    {
      _configuration = configuration;
      DbConn = _configuration.GetConnectionString("DbConn");
    }

    // GET: api/<controller>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Navbar>), StatusCodes.Status200OK)]
    public IEnumerable<Navbar> Get()
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.NavbarRepository.GetAll().ToList();
      }
    }

    [HttpGet("[action]")]
    [ProducesResponseType(typeof(IEnumerable<Navbar>), StatusCodes.Status200OK)]
    public IEnumerable<Navbar> GetAllPublished()
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.NavbarRepository.GetAllPublished().ToList();
      }
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(Navbar), StatusCodes.Status200OK)]
    public Navbar Get(int id)
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.NavbarRepository.Fetch(id);
      }
    }

    // POST api/<controller>
    [HttpPost]
    [ProducesResponseType(typeof(IActionResult), StatusCodes.Status200OK)]
    [ProducesErrorResponseType(typeof(BadRequestObjectResult))]
    public IActionResult Post([FromBody]Navbar navbar)
    {
      try
      {
        using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
        {
          navbar.IsPublished = true;
          navbar.CreatedDate = DateTime.UtcNow;
          unitOfWork.NavbarRepository.Insert(navbar);
          unitOfWork.Commit();
        }
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(IActionResult), StatusCodes.Status200OK)]
    [ProducesErrorResponseType(typeof(BadRequestObjectResult))]
    public IActionResult Put(int id, [FromBody]Navbar navbar)
    {
      try
      {
        using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
        {
          var dbNavbar = unitOfWork.NavbarRepository.Fetch(id);
          dbNavbar.DisplayOrder = navbar.DisplayOrder;
          dbNavbar.IsDeleted = navbar.IsDeleted;
          dbNavbar.IsPublished = navbar.IsPublished;
          dbNavbar.Name = navbar.Name;
          dbNavbar.Url = navbar.Url;

          unitOfWork.NavbarRepository.Update(dbNavbar);
          unitOfWork.Commit();
        }

        return Ok();
      }
      catch (Exception ex)
      {
         return BadRequest(ex);
      }
    }
  }
}
