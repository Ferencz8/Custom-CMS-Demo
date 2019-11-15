using BackOffice.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories.Interfaces
{
  public interface IWidgetRepository
  {
    IEnumerable<Widget> GetAllPublished();

    IEnumerable<Widget> GetAll();
  }
}
