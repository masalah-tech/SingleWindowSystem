using Microsoft.AspNetCore.Mvc;

namespace SingleWindowSystem.Controllers
{
    public class ServiceController : Controller
    {
        public IActionResult RequestPrimaryService(string service)
        {
            switch (service)
            {
                case "Issuing a business start-up certificate":
                    return RedirectToAction("StartupCertificate", "Service");

                case "Issuing an input exemption certificate for the first time":
                    return RedirectToAction("FirstTimeInputExemptionCertificate", "Service");

                case "Issuing a certificate of exemption for entries for the second time and beyond":
                    return RedirectToAction("SecondTimeInputExemptionCertificate", "Service");

                case "Issuing a certificate for adding machines":
                    return RedirectToAction("AddMachinesCertificate", "Service");

                case "Issuing a certificate for the renewal of the project implementation phases":
                    return RedirectToAction("ImplementationPhasesRenewalCertificate", "Service");

                case "Issuance of a replacement document":
                    return RedirectToAction("ReplacementDocument", "Service");

                case "Website modification and transfer":
                    return RedirectToAction("WebsiteModification", "Service");

                case "Issuance of a certificate of ownership modification":
                    return RedirectToAction("OwnershipModificationCertificate", "Service");

                case "Issuing a certificate of amending the legal form":
                    return RedirectToAction("LegalFormAmendmentCertificate", "Service");

                case "Issuing a project name amendment certificate":
                    return RedirectToAction("ProjectNameAmendment", "Service");

                case "Cancellation of registration certificate / decision / license":
                    return RedirectToAction("CancellationOfRegistrationCertificate", "Service");

                case "Issuing a project expansion certificate":
                    return RedirectToAction("ProjectExpansionCertificate", "Service");

                case "Issuance of project benefit certificate":
                    return RedirectToAction("ProjectBenefitCertificate", "Service");

                default:
                    return BadRequest();
            }
        }

        public IActionResult StartupCertificate()
        {
            return View();
        }
        
        public IActionResult FirstTimeInputExemptionCertificate()
        {
            return View();
        }

        public IActionResult SecondTimeInputExemptionCertificate()
        {
            return View();
        }

        public IActionResult AddMachinesCertificate()
        {
            return View();
        }

        public IActionResult ImplementationPhasesRenewalCertificate()
        {
            return View();
        }

        public IActionResult ReplacementDocument()
        {
            return View();
        }

        public IActionResult WebsiteModification()
        {
            return View();
        }

        public IActionResult OwnershipModificationCertificate()
        {
            return View();
        }

        public IActionResult LegalFormAmendmentCertificate()
        {
            return View();
        }

        public IActionResult ProjectNameAmendment()
        {
            return View();
        }

        public IActionResult CancellationOfRegistrationCertificate()
        {
            return View();
        }

        public IActionResult ProjectExpansionCertificate()
        {
            return View();
        }

        public IActionResult ProjectBenefitCertificate()
        {
            return View();
        }
    }
}
