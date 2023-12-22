using System.ComponentModel.DataAnnotations;

namespace SingleWindowSystem.Models
{
    public class RepresentativeViewModel
    {
        public string UserId { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 4)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }


        [MaxLength(100, ErrorMessage = "The {0}  can not be more than {1} length.")]
        [Display(Name = " Second Name")]
        public string? SecondName { get; set; }


        [MaxLength(100, ErrorMessage = "The {0}  can not be more than {1} length.")]
        [Display(Name = "Third Name")]
        public string? ThirdName { get; set; }
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 4)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }


  
        [Required]
        public int TypeOfUser { get; set; } = 2;

        public int TypeOfSSNDocument { get; set; } = 0;//0=ID Card , 1=Pasport
        public string SNNDocumentNo { get; set; }
        public string SNNDocumentPlaceOfIssue { get; set; }
        public DateTime SNNDocumentDateOfIssue { get; set; }
        public DateTime? SNNDocumentDateOfExpiry { get; set; }
        public string? SNNDocumentLocation { get; set; }
        public IEnumerable<IFormFile>? SNNDocumentFile { get; set; }
        public string NationalityName { get; set; }
        public string Country { get; set; }
        public string StatePrvice { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string StreetAddress1 { get; set; }
        public string? StreetAddress2 { get; set; }

        public string PhoneNumber { get; set; }
        public string? MobileNummber { get; set; }
        public string? FaxNumber { get; set; }
        public string? POBox { get; set; }
    
        public IEnumerable<IFormFile>? RDocumentFile { get; set; }
        public string RDocumentNo { get; set; }
        public string RDocumentPlaceOfIssue { get; set; }
        public DateTime RDocumentDateOfIssue { get; set; }

        public string Representation { get; set; }
    }
}
