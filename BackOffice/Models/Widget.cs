using PetaPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackOffice.API.Models
{
    [TableName("Widgets")]
    public class Widget
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string Content { get; set; }

        public WidgetType WidgetType { get; set; }

        public bool IsPublished { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsDeleted { get; set; }

        public int DisplayOrder { get; set; }
    }
}
