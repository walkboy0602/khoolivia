using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Khoolivia.Controllers
{
    public class LuvController : Controller
    {
        public Uri UrlDomain = new Uri(string.Format("https://{0}.blob.core.windows.net/",
                ConfigurationManager.AppSettings["StorageAccountName"].ToString()) + "wedding");

        // GET: Luv
        public ActionResult Index()
        {
            ViewBag.UrlDomain = UrlDomain;
            return View();
        }

        public ActionResult MorePhoto()
        {
            ViewBag.UrlDomain = UrlDomain;
            return PartialView("_MorePhoto");
        }
    }
}
