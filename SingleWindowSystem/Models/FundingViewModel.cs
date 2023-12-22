using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class FundingViewModel
    {
        [Required]
        public string TypeOfFundingName { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public decimal PercentageTheFundingType { get; set; }

    }
}
