using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblCourse
    {
        public TblCourse()
        {
            TblBatchCourse = new HashSet<TblBatchCourse>();
            TblCourseEnquiry = new HashSet<TblCourseEnquiry>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public decimal? CourseFees { get; set; }
        public int? TrainerId { get; set; }
        public bool? IsActive { get; set; }

        public virtual TblTrainer Trainer { get; set; }
        public virtual ICollection<TblBatchCourse> TblBatchCourse { get; set; }
        public virtual ICollection<TblCourseEnquiry> TblCourseEnquiry { get; set; }
    }
}
