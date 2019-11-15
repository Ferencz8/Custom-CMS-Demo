using PetaPoco;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public class PetaPocoUnitOfWork : IUnitOfWork
  {
    private readonly Transaction _petaTransaction;
    private readonly Database _database;

    private NavbarRepository _navbarRepository;
    private WidgetRepository _widgetRepository;

    public PetaPocoUnitOfWork(string connectionString)
    {
      _database = new Database(connectionString, "SqlServer");
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

    public NavbarRepository NavbarRepository
    {
      get
      {
        if (_navbarRepository == null)
        {
          _navbarRepository = new NavbarRepository();
        }
        return _navbarRepository;
      }
    }

    public WidgetRepository WidgetRepository
    {
      get
      {
        if (_widgetRepository == null)
        {
          _widgetRepository = new WidgetRepository();
        }
        return _widgetRepository;
      }
    }

    public void Commit()
    {
      _petaTransaction.Complete();
    }
  }

}
