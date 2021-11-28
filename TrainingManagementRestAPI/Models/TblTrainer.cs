using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblTrainer
    {
        public TblTrainer()
        {
            TblCourse = new HashSet<TblCourse>();
        }

        public int TrainerId { get; set; }
        public string TrainerName { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<TblCourse> TblCourse { get; set; }
    }
}
