using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblCourseEnquiry
    {
        public int CourseEnquiryId { get; set; }
        public int? CourseId { get; set; }
        public int? LeadId { get; set; }
        public string CourseEnquiryStatus { get; set; }
        public DateTime? CourseEnqiryDate { get; set; }

        public virtual TblCourse Course { get; set; }
        public virtual TblLead Lead { get; set; }
    }
}
