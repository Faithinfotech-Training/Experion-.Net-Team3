using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblTrainee
    {
        public int TraineeId { get; set; }
        public int? LeadId { get; set; }
        public int? BatchId { get; set; }
        public bool? IsActive { get; set; }

        public virtual TblBatch Batch { get; set; }
        public virtual TblLead Lead { get; set; }
    }
}
