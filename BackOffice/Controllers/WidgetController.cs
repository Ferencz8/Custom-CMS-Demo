using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackOffice.API.Models;
using BackOffice.API.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackOffice.API
{
  [Route("api/[controller]")]
  public class WidgetController : Controller
  {
    private IConfiguration _configuration;
    private readonly string DbConn;

    public WidgetController(IConfiguration configuration)
    {
      _configuration = configuration;
      DbConn = _configuration.GetConnectionString("DbConn");
    }

    // GET: api/<controller>
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Widget>), StatusCodes.Status200OK)]
    public IEnumerable<Widget> Get()
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.WidgetRepository.GetAll().ToList();
      }
    }

    [HttpGet("[action]")]
    [ProducesResponseType(typeof(IEnumerable<Widget>), StatusCodes.Status200OK)]
    public IEnumerable<Widget> GetAllPublished()
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.WidgetRepository.GetAllPublished().ToList();
      }
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(Widget), StatusCodes.Status200OK)]
    public Widget Get(int id)
    {
      using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
      {
        return unitOfWork.WidgetRepository.Fetch(id);
      }
    }

    // POST api/<controller>
    [HttpPost]
    [ProducesResponseType(typeof(IActionResult), StatusCodes.Status200OK)]
    [ProducesErrorResponseType(typeof(BadRequestObjectResult))]
    public IActionResult Post([FromBody]Widget navbar)
    {
      try
      {
        using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
        {
          navbar.IsPublished = true;
          navbar.CreatedDate = DateTime.UtcNow;
          unitOfWork.WidgetRepository.Insert(navbar);
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
    public IActionResult Put(int id, [FromBody]Widget widget)
    {
      try
      {
        using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
        {
          var dbWidget = unitOfWork.WidgetRepository.Fetch(id);
          dbWidget.DisplayOrder = widget.DisplayOrder;
          dbWidget.IsDeleted = widget.IsDeleted;
          dbWidget.IsPublished = widget.IsPublished;
          dbWidget.Name = widget.Name;
          dbWidget.Content = widget.Content;

          unitOfWork.WidgetRepository.Update(dbWidget);
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
