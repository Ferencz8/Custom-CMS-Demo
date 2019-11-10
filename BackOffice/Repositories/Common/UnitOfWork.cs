using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public static class UnitOfWork
  {
    [ThreadStatic]
    public static IDatabase Current;
  }
}
