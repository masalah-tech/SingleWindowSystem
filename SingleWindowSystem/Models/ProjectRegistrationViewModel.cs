namespace SingleWindowSystem.Models
{
    public class ProjectRegistrationViewModel
    {
        public AddUserViewModel addUserViewModel { get; set; }
        public ProjectViewModel projectViewModel { get; set; }


        public List<TimeframeViewModel> timeframeViewModels { get; set; }
        public List<ProductViewModel> productViewModel { get; set; }
        public List<CostViewModel> costViewModel { get; set; }
        public List<FundingViewModel> fundingViewModel { get; set; }
        public List<FounderViewModel> founderViewModel { get; set; }
        public CompanyViewModel companyViewModel { get; set; }
        public RepresentativeViewModel representativeViewModel { get; set; }
        public List<EquipmentNeededViewModel> equipmentNeededViewModel { get; set; }
        public decimal AmountOfEquipmentNedded { get; set; }
         public List<ProductionInputsRequirementViewmodel> productionInputsRequirementViewmodel { get; set; }
        public decimal AmountOfProductionInputsRequirement { get; set; }
         public List<LaborViewModel> laborViewModel { get; set; }
         public List<EnvironmentImpactViewModel> environmentImpactViewModel { get; set; }
         public List<DocumentViewModel> documentViewModel { get; set; }


        
    }
}
