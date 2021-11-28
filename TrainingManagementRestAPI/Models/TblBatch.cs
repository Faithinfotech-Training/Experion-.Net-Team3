using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblBatch
    {
        public TblBatch()
        {
            TblBatchCourse = new HashSet<TblBatchCourse>();
            TblTrainee = new HashSet<TblTrainee>();
        }

        public int BatchId { get; set; }
        public string BatchName { get; set; }
        public int? BatchStrength { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<TblBatchCourse> TblBatchCourse { get; set; }
        public virtual ICollection<TblTrainee> TblTrainee { get; set; }
    }
}
