namespace SingleWindowSystem.Models
{
    public class LaborViewModel
    {
        public int Id { get; set; }
        public string RequiredPosition { get; set; }
        public int NumberOfYemeni { get; set; } 
        public int NumberOfForeign { get; set; } 
        public int? PeriodByMonth { get; set; }
        public decimal? AnnualSalaryUSD { get; set; }
    }
}
