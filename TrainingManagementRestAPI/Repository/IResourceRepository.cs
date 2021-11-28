using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingManagementRestAPI.Models;

namespace TrainingManagementRestAPI.Repository
{
   public  interface IResourceRepository
    {
        //Get all Resources
        Task<List<TblResource>> GetResource();

        //Add a new Resource
        Task<int> AddResource(TblResource resource);

        //Update Resource
        Task UpdateResource(TblResource resource);

        //Delete Resource
        Task DeleteResource(int id);
     
        //Get resource by id
        Task<TblResource> GetResourceById(int id);

    }
}
