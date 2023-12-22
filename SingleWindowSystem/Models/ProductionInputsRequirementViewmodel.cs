using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class ProductionInputsRequirementViewmodel
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public int TypeOfSource { get; set; } // 0 = local  , 1 = Import
        public string UintName { get; set; }
      
        public decimal Quantity { get; set; }
        public decimal Amount { get; set; }
    }
}
