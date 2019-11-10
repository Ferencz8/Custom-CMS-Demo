using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public class PetaPocoUnitOfWorkProvider : IUnitOfWorkProvider
  {
    public IUnitOfWork GetUnitOfWork(string connectionString)
    {
      if (UnitOfWork.Current != null)
      {
        throw new InvalidOperationException("Existing unit of work.");
      }
      var petaPocoUnitOfWork = new PetaPocoUnitOfWork(connectionString);
      UnitOfWork.Current = petaPocoUnitOfWork.Database;
      return petaPocoUnitOfWork;
    }
  }
}
