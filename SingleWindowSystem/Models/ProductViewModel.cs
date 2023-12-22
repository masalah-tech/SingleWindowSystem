using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class ProductViewModel
    {
        [Required]
        public string ProductOrService { get; set; }
        [Required]
        public string UintName { get; set; }
        [Required]
        public decimal Quantity { get; set; }
    }
}
