using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblResource
    {
        public TblResource()
        {
            TblResourceEnquiry = new HashSet<TblResourceEnquiry>();
        }

        public int ResourceId { get; set; }
        public string ResourceName { get; set; }
        public decimal? CourseFees { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<TblResourceEnquiry> TblResourceEnquiry { get; set; }
    }
}
