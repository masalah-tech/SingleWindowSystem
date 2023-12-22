using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class TimeframeViewModel
    {
        [Required]
        public int TypeOfTimeframeID { get; set; }
        [Required]
        public DateTime DateOfStart { get; set; }
        public DateTime DateOfEnd { get; set; }
        public string? Remarks { get; set; }
    }
}
