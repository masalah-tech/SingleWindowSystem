namespace SingleWindowSystem.Models
{
    public class ProjectViewModel
    {
        public int ProjectId { get; set; }
        public string ProjectName_Name { get; set; }
        public string Description { get; set; } = string.Empty;
        public string ActivityType { get; set; }
        public decimal LandArea_AreaInFigures { get; set; }
        public string LandArea_AreaInWord { get; set; }
        public int LandArea_TypeOfOwnership { get; set; }
        public string LandArea_StatePrvice { get; set; }
        public string LandArea_City { get; set; }
        public string LandArea_PostalCode { get; set; }
        public string LandArea_StreetAddress1 { get; set; }
        public string ASEmailAddress { get; set; }
        public string ASPhoneNumber { get; set; }
        public string ASMobileNumber { get; set; }
        public string? ASFaxNumber { get; set; }
        public string? ASPOBox { get; set; }
        public string AS_Country { get; set; }
        public string AS_StatePrvice { get; set; }
        public string AS_City { get; set; }
        public string AS_PostalCode { get; set; }
        public string AS_StreetAddress1 { get; set; }
        public int TypeOfApplcation { get; set; }
        public int TypeOfOwner { get; set; } //0=Individual ,1=Existing Companies,2=Companies Under Incorporatio
        public int? EstimatedWaterPerYearInCM { get; set; }
        public int? EstimatedElectricityPerYearInKW { get; set; }
        public int? QuantityEstimatedElectricityPrivate { get; set; }
        public int? QuantityEstimatedElectricityGovernment { get; set; }
        public int? QuantityEstimatedWaterPrivate { get; set; }
        public int? QuantityEstimatedWaterGovernment { get; set; }
      
        public double TotalFunding { get; set; }
        public double TotalCost { get; set; }
        public int LocalLaberCount { get; set; }
        public int ForeignLaberCount { get; set; }
        public int TotalLaberCount { get; set; }
        public double? TotalAnnualSalary4Labors { get; set; }
        public int NatinalityOfInvesment { get; set; } = 0;//0 = yemeni , 1= forign , 2 = both

    }
}
