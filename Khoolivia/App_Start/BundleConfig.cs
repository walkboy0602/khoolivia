using System.Web;
using System.Web.Optimization;

namespace Khoolivia
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/custom").Include(
                      "~/Scripts/plugins.js",
                      "~/Scripts/main.js"));

            bundles.Add(new ScriptBundle("~/bundles/libs").Include(
               "~/Scripts/libs/jquery.appear.js",
               "~/Scripts/libs/jquery.hoverIntent.js",
               "~/Scripts/libs/jquery.easing.1.3.js",
               "~/Scripts/libs/jquery.nicescroll.min.js",
               "~/Scripts/libs/jquery.ui.totop.js",
               "~/Scripts/libs/jquery.localscroll-min.js",
               "~/Scripts/libs/jquery.scrollTo-min.js",
               "~/Scripts/libs/jquery.parallax-1.1.3.js",
               "~/Scripts/libs/jquery.easypiechart.min.js",
               "~/Scripts/libs/jquery.countTo.js",
               "~/Scripts/libs/jquery.prettyPhoto.js",
               "~/Scripts/libs/jflickrfeed.min.js",
               "~/Scripts/libs/jquery.plugin.min.js",
               "~/Scripts/libs/jquery.countdown.js",
               "~/Scripts/libs/jquery.isotope.min.js",
               "~/Scripts/libs/owl.carousel.min.js",
               "~/Scripts/libs/jquery.fractionslider.min.js",
               "~/Scripts/libs/jquery.flexslider-min.js",
               "~/Scripts/libs/jquery.bxslider.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/jquery.countdown.css",
                      "~/Content/bootstrap.css",
                      "~/Content/main3.css",
                      "~/Content/animations.css",
                      "~/Content/fonts.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
