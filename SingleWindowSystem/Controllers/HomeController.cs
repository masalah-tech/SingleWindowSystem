using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using SingleWindowSystem.Models;

namespace SingleWindowSystem.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Registration()
        {
            var registration =new  ProjectRegistrationViewModel();
            return View(registration);
        }
        public IActionResult Index()
        {
            ISession session = HttpContext.Session;

            if (!session.Keys.Contains("lang"))
            {
                session.SetString("lang", "ar");
                session.SetString("dir", "rtl");
                session.SetString("theme", "light");
            }

            return View();
        }

        public IActionResult Search()
        {
           
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        public IActionResult ToAr(string viewName)
        {
            HttpContext.Session.SetString("lang", "ar");
            HttpContext.Session.SetString("dir", "rtl");
           

            return LocalRedirect(viewName);
        }

        public IActionResult ToEn(string viewName)
        {
            HttpContext.Session.SetString("lang", "en");
            HttpContext.Session.SetString("dir", "ltr");
            

            return LocalRedirect(viewName);
        }
        
        public IActionResult ToDark(string viewName)
        {
        
            HttpContext.Session.SetString("theme", "dark");
          

            return LocalRedirect(viewName);
        }

        public IActionResult ToLight(string viewName)
        {
         
            HttpContext.Session.SetString("theme", "light");
            return LocalRedirect(viewName);
        }

        public IActionResult ProjectRegistration()
        {
          

            return View();
        }

        public IActionResult RegisteredProjects()
        {
          

            return View();
        }

        public IActionResult ProjectsUnderRegistration()
        {
          

            return View();
        }

        public IActionResult ProjectDetails()
        {
           

            return View();
        }

        public IActionResult ServicesInput()
        {
            

            return View();
        }

        public IActionResult ServicesDataOutput()
        {
            

            return View();
        }

        public IActionResult TempView()
        {
            return View();
        }

        public IActionResult SubsidiaryServices()
        {
            return View();
        }

        public IActionResult AllOrderFolders()
        {
            return View();
        }

        public IActionResult CurrentOrderFolders()
        {
            return View();
        }

        public IActionResult DoneOrderFolders()
        {
            return View();
        }
        public IActionResult OutstandingOrderFolders()
        {
            return View();
        }

        public IActionResult AllOrders()
        {
            return View();
        }

        public IActionResult CurrentOrders()
        {
            return View();
        }

        public IActionResult DoneOrders()
        {
            return View();
        }
        public IActionResult OutstandingOrders()
        {
            return View();
        }

        public IActionResult FinishedProjects()
        {
            return View();
        }

        public IActionResult ProjectPortfolio()
        {
            return View();
        }

        public IActionResult Order()
        {
            return View();
        }

        public IActionResult DocumentReview(string docuementId)
        {
            ViewData["document_id"] = docuementId;

            return View();
        }

        public IActionResult AlertsAndTasks()
        {
            return View();
        }

        public IActionResult ServiceOrder()
        {
            return View();
        }

        public IActionResult ProjectCard()
        {
            return View();
        }
    }
}