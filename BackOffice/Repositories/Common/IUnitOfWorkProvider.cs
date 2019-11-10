using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public interface IUnitOfWorkProvider
  {
    IUnitOfWork GetUnitOfWork(string connectionString);
  }
}
