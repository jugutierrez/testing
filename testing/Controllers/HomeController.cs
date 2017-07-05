using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Postal;

namespace testing.Controllers
{
    public class HomeController : Controller
    {
        Envia_Correo c = new Envia_Correo();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            c.enviar();

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}