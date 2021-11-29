using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingManagementRestAPI.Models;

namespace TrainingManagementRestAPI.Repository
{
    public class LeadRepository:ILeadRepository
    {

        Training_AcademyDBContext db;

        public LeadRepository(Training_AcademyDBContext _db)
        {
            db = _db;
        }

        #region Getlead()
        public async Task<List<TblLead>> GetLead()
        {
            if (db != null)
            {
                return await db.TblLead.ToListAsync();
            }
            return null;
        }
        #endregion

        #region AddLead()
        public async Task<int> AddLead(TblLead lead)
        {
            if (db != null)
            {
                await db.TblLead.AddAsync(lead);
                await db.SaveChangesAsync();
                return lead.LeadId;
            }
            return 0;
        }
        #endregion

        #region DeleteLead()
        public async Task<TblLead> DeleteLead(int id)
        {
            if (db != null)
            {
                TblLead dbLead = db.TblLead.Find(id);
                db.TblLead.Remove(dbLead);
                db.SaveChanges();
                return dbLead;
            }
            return null;
        }
        #endregion

        #region UpdateLead()
        public async Task UpdateLead(TblLead lead)
        {
            if (db != null)
            {
                db.TblLead.Update(lead);
                await db.SaveChangesAsync();
            }
        }
        #endregion

        #region Get Lead by id
        public async Task<TblLead> GetLeadById(int id)
        {
            if (db != null)
            {
                TblLead lead = await db.TblLead.FindAsync(id);
                return lead;

            }
            return null;
        }
        #endregion

        #region AddUser()
        public async Task<int> AddUser(TblUser user)
        {
            if (db != null)
            {

                await db.TblUser.AddAsync(user);
                await db.SaveChangesAsync();
                return user.LoginId;
            }
            return 0;
        }

       
        #endregion

    }
}
