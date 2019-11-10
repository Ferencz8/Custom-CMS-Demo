using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public class PetaPocoUnitOfWork : IUnitOfWork
  {
    private readonly Transaction _petaTransaction;
    private readonly Database _database;

    public PetaPocoUnitOfWork(string connectionString)
    {
      _database = new Database(connectionString);
      _petaTransaction = new Transaction(_database);
    }

    public void Dispose()
    {
      UnitOfWork.Current = null;
      _petaTransaction.Dispose();
    }

    public Database Database
    {
      get { return _database; }
    }

    public void Commit()
    {
      _petaTransaction.Complete();
    }
  }

}
