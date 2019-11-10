using BackOffice.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public class NavbarRepository : BaseRepository<Navbar>
  {
    public override Navbar Fetch(int uid)
    {
      using (var db = Database)
      {
        return db.Query<Navbar>(@"SELECT * FROM Navbars WHERE Id = @0", uid)?.FirstOrDefault();
      }
    }
  }
}
