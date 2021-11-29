using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblResourceEnquiry
    {
        public int ResourceEnquiryId { get; set; }
        public int? ResourceId { get; set; }
        public int? LeadId { get; set; }
        public string ResourceEnquiryStatus { get; set; }
        public DateTime? ResourceEnqiryDate { get; set; }

        public virtual TblLead Lead { get; set; }
        public virtual TblResource Resource { get; set; }
    }
}
