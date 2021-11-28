using System;
using System.Collections.Generic;

namespace TrainingManagementRestAPI.Models
{
    public partial class TblUser
    {
        public int LoginId { get; set; }
        public string UserName { get; set; }
        public string UserPassword { get; set; }
        public int? RoleId { get; set; }

        public virtual TblRole Role { get; set; }
    }
}
