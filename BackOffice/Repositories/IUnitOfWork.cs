
using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public interface IUnitOfWork : IDisposable
  {

    void Commit();
    Database Database { get; }
    NavbarRepository NavbarRepository { get; }
    WidgetRepository WidgetRepository { get; }
  }
}
