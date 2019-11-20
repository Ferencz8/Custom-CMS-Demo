using System;
using System.Collections.Generic;
using System.IO;
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
        var result = unitOfWork.WidgetRepository.GetAll().ToList();
        return result;
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
    public IActionResult Post([FromBody]Widget widget)
    {
      try
      {
        using (var unitOfWork = new PetaPocoUnitOfWorkProvider().GetUnitOfWork(DbConn))
        {
          widget.IsPublished = true;
          widget.CreatedDate = DateTime.UtcNow;
          unitOfWork.WidgetRepository.Insert(widget);
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

     [HttpPost("[action]")]
    [ProducesResponseType(typeof(JsonResult), StatusCodes.Status200OK)]
    [ProducesErrorResponseType(typeof(StatusCodeResult))]
    public async Task<IActionResult> UploadFile(IFormFile file)
    {
      try
      {
        if (file == null || file.Length == 0)
          return Content("file not selected");

        // TODO:: needs a check for other files w/ same name

        // create images directory 
        string imagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), "images");
        if (!Directory.Exists(imagesDirectory))
        {
          Directory.CreateDirectory(imagesDirectory);
        }

        // save file
        var path = Path.Combine(imagesDirectory, file.FileName);
        using (var stream = new FileStream(path, FileMode.Create))
        {
          await file.CopyToAsync(stream);
        }

        return Json(new
        {
          imageUrl = $"https://{Request.Host}/api/widget/DownloadFile?fileName={file.FileName}"
        });
      }
      catch (Exception ex)
      {
        return StatusCode(StatusCodes.Status500InternalServerError, ex);
      }
    }

    [HttpGet("[action]")]
    [ProducesResponseType(typeof(File), StatusCodes.Status200OK)]
    [ProducesErrorResponseType(typeof(StatusCodeResult))]
    public async Task<IActionResult> DownloadFile(string fileName)
    {
      try
      {
        if (string.IsNullOrEmpty(fileName))
          return Content("filename not present");

        var path = Path.Combine(Directory.GetCurrentDirectory(), "images", fileName);

        var memoryStream = new MemoryStream();
        var fileStream = new FileStream(path, FileMode.Open);

        await fileStream.CopyToAsync(memoryStream);
        memoryStream.Seek(0, SeekOrigin.Begin);
        return File(memoryStream, GetContentType(path), Path.GetFileName(path));
      }
      catch (Exception ex)
      {
        return StatusCode(StatusCodes.Status500InternalServerError, ex);
      }
    }

    private string GetContentType(string path)
    {
      var types = GetMimeTypes();
      var ext = Path.GetExtension(path).ToLowerInvariant();
      return types[ext];
    }

    private Dictionary<string, string> GetMimeTypes()
    {
      return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
    }
  }
}
