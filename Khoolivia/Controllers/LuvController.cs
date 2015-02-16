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

        // GET: Luv/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Luv/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Luv/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Luv/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Luv/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Luv/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Luv/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
