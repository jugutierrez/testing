using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace testing.Controllers
{
    public class panelController : Controller
    {
        // GET: panel
        public ActionResult Index()
        {
            return PartialView("_index");
        }
        public ActionResult agregar_bodega()
        {
            return PartialView("_panel_agregar_bodegas");
        }
        public ActionResult mis_bodegas()
        {
            return PartialView("_panel_mis_ofertas");
        }
        public ActionResult informes()
        {
            return PartialView("_panel_informes");
        }
    }
}