using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class EquipmentNeededViewModel
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public int TypeOfSource { get; set; }  // 0 : Local ,  1 : Import//0 1     
        public string UintName { get; set; }
        public decimal Qunantity { get; set; }
        public decimal Amount { get; set; }
      
    }
}
