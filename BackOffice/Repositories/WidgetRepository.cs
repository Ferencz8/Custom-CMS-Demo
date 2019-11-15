using BackOffice.API.Models;
using BackOffice.API.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public class WidgetRepository : BaseRepository<Widget>, IWidgetRepository
  {
    public override Widget Fetch(int uid)
    {
      return this.Database.Fetch<Widget>(@"SELECT * FROM Widgets WHERE Id = @0", uid)?.FirstOrDefault();
    }

    public IEnumerable<Widget> GetAllPublished()
    {
      return Database.Query<Widget>(
        @"SELECT * FROM Widgets
          WHERE IsPublished = 1
          AND IsDeleted = 0
          ORDER BY DisplayOrder ASC");
    }

    public IEnumerable<Widget> GetAll()
    {
      return Database.Query<Widget>(
        @"SELECT * FROM Widgets
          WHERE IsDeleted = 0
          ORDER BY DisplayOrder ASC");
    }
  }
}
