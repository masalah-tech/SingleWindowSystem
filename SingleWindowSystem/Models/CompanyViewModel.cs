namespace SingleWindowSystem.Models
{
    public class CompanyViewModel
    {
        public int Id { get; set; }
        public string CommercialName { get; set; }
        public int LegalStatusId { get; set; }
        public string CommercialRegisterPath { get; set; }
        public string CommercialRegisterNo { get; set; }
        public DateTime CommercialRegisterDateOfIssue { get; set; }
        public IEnumerable<IFormFile> CommercialRegisterFile { get; set; }
        public string CompanyActivity { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string MobileNumber { get; set; }
        public string? FaxNumber { get; set; }
        public string? POBox { get; set; }
        public string NationalityName { get; set; }
        public string Country { get; set; }
        public string StatePrvice { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string StreetAddress1 { get; set; }
        public string? StreetAddress2 { get; set; }

    }
}
