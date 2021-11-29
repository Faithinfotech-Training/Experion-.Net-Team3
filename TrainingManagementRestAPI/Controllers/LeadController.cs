using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingManagementRestAPI.Models;
using TrainingManagementRestAPI.Repository;

namespace TrainingManagementRestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadController : ControllerBase
    {
        ILeadRepository leadRepository;
        //constructor dependency injection
        public LeadController(ILeadRepository _c)
        {
            leadRepository = _c;
        }
        #region Get lead
        [HttpGet]
        [Route("GetLead")]
        public async Task<IActionResult> GetLead()
        {

            try
            {
                var lead = await leadRepository.GetLead();
                if (lead == null)
                {
                    return NotFound();
                }
                return Ok(lead);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        #region Add lead
        [HttpPost]
        [Route("AddLead")]
        public async Task<IActionResult> AddLead([FromBody] TblLead model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var LeadId = await leadRepository.AddLead(model);
                    if (LeadId > 0)
                    {
                        return Ok(LeadId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();

        }
        #endregion

        #region Update Lead
        [HttpPut]
        [Route("UpdateLead")]
        public async Task<IActionResult> UpdateLead([FromBody] TblLead model)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await leadRepository.UpdateLead(model);
                    return Ok();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        #region Delete Course
        [HttpDelete]
        [Route("DeleteLead")]
        //[Route("DeleteLead")]
        public async Task<IActionResult> DeleteLead(int id)
        {
            try
            {
                var lead= await leadRepository.DeleteLead(id);
                if (lead == null)
                {
                    return NotFound();
                }
                return Ok(lead);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

        #region GetLeadId
       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseById(int id)

        {

            try

            {

                var course = await leadRepository.GetLeadById(id);

                if (course == null)

                {

                    return NotFound();

                }

                return Ok(course);

            }

            catch (Exception)

            {

                return BadRequest();

            }
        }

        #endregion
        #region Add lead
        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] TblUser model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var UserId = await leadRepository.AddUser(model);
                    if (UserId > 0)
                    {
                        return Ok(UserId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();

        }
        #endregion
    }
}

