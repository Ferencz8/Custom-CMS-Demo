using BackOffice.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackOffice.API.Repositories.Interfaces;

namespace BackOffice.API.Repositories
{
  public class NavbarRepository : BaseRepository<Navbar>, INavbarRepository
  {
    public override Navbar Fetch(int uid)
    {

      return Database.Query<Navbar>(@"SELECT * FROM Navbars WHERE Id = @0", uid)?.FirstOrDefault();
    }

    public IEnumerable<Navbar> GetAllPublished()
    {
      return Database.Query<Navbar>(
        @"SELECT * FROM Navbars
          WHERE IsPublished = 1
          AND IsDeleted = 0
          ORDER BY DisplayOrder ASC");
    }

    public IEnumerable<Navbar> GetAll()
    {
      return Database.Query<Navbar>(
        @"SELECT * FROM Navbars
          WHERE IsDeleted = 0
          ORDER BY DisplayOrder ASC");
    }
  }
}
