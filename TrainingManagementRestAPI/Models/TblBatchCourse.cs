using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblBatchCourse
    {
        public int BatchCourseId { get; set; }
        public int? BatchId { get; set; }
        public int? CourseId { get; set; }

        public virtual TblBatch Batch { get; set; }
        public virtual TblCourse Course { get; set; }
    }
}
