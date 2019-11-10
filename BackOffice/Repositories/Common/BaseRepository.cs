using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public abstract class BaseRepository<T> : IRepository<T>
  {
    protected IDatabase Database
    {
      get
      {
        return UnitOfWork.Current;
      }
    }

    public abstract T Fetch(int uid);
    public void Insert(T entity)
    {
      Database.Save(entity);
    }

    public void Update(T entity)
    {
      Database.Update(entity);
    }

    public void Delete(T entity)
    {
      Database.Delete(entity);
    }
  }
}
