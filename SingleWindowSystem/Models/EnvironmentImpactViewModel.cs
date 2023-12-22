using System.ComponentModel.DataAnnotations.Schema;

namespace SingleWindowSystem.Models
{
    public class EnvironmentImpactViewModel
    {
        public int Id { get; set; }
        public string TypeOfResidueName { get; set; }
        
        public decimal Size { get; set; }
        public string? ProposedTreatmentMethods { get; set; }
    }
}
