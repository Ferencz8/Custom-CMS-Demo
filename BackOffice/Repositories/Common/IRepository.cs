using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Repositories
{
  public interface IRepository<T>
  {
    void Insert(T entity);
    void Update(T entity);
    void Delete(T entity);
    T Fetch(int uid);
  }
}
