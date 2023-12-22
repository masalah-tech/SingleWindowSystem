namespace SingleWindowSystem.Models 
{
    public class FounderViewModel
    {
        public string FullName { get; set; }
        public decimal ContributionPercentage { get; set; }
        public int TypeOfSSNDocument { get; set; } = 0;//0=ID Card , 1=Pasport
        public string SNNDocumentNo { get; set; }
        public string SNNDocumentPlaceOfIssue { get; set; }
        public DateTime SNNDocumentDateOfIssue { get; set; }
        public DateTime? SNNDocumentDateOfExpiry { get; set; }
        public string SNNDocumentLocation { get; set; }
        public IEnumerable<IFormFile> SNNDocumentFile { get; set; }
        public string NationalityName { get; set; }
       
    }
}
