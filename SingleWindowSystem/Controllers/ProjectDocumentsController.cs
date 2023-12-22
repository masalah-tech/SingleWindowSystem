using Microsoft.AspNetCore.Mvc;
using System.Reflection.PortableExecutable;
using System.Security.Cryptography.Xml;
using System.Xml.Linq;

namespace SingleWindowSystem.Controllers
{
    public class ProjectDocumentsController : Controller
    {
        public IActionResult ProjectRegistrationDocument()
        {
            return View();
        }

        public IActionResult ActivityStartDocument()
        {
            return View();
        }

        public IActionResult FirstTimeProductionInputExemptionDocument()
        {
            return View();
        }

        public IActionResult SecondTimeAndBeyondProductionInputsExemptionDocument()
        {
            return View();
        }

        public IActionResult AddMachinesDocument()
        {
            return View();
        }

        public IActionResult ProjectImplementationPhaseRenewalDocument()
        {
            return View();
        }

        public IActionResult ReplacementOfLostDocument()
        {
            return View();
        }

        public IActionResult LocationModificationAndTransferDocument()
        {
            return View();
        }

        public IActionResult ProjectOwnershipModificationDocument()
        {
            return View();
        }

        public IActionResult LegalFormModificationDocument()
        {
            return View();
        }

        public IActionResult ProjectNameModificationDocument()
        {
            return View();
        }

        public IActionResult ProjectRegistrationCertificateCancellationDocument()
        {
            return View();
        }
    }
}
