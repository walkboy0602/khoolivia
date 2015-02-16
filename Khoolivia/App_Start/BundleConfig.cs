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

            bundles.Add(new ScriptBundle("~/content/bootstrap").Include(
                      "~/Content/bootstrap.min.css", 
                      "~/Content/font-awesome.css"));

            #region Wedding
            bundles.Add(new ScriptBundle("~/bundles/wedding/js").Include(
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
               "~/Scripts/libs/jquery.bxslider.min.js",
               "~/Scripts/plugins.js",
               "~/Scripts/main.js"));

            bundles.Add(new StyleBundle("~/Content/wedding/css").Include(
                      "~/Content/jquery.countdown.css",
                      "~/Content/main3.css",
                      "~/Content/animations.css",
                      "~/Content/fonts.css"));
            #endregion

            #region Luv

            bundles.Add(new StyleBundle("~/Content/luv/css").Include(
                "~/Content/luv/supersized.css",
                "~/Content/luv/supersized.shutter.css",
                "~/Content/luv/animate.css",
                "~/Content/luv/magnific-popup.css",
                "~/Content/luv/owl.carousel.css",
                "~/Content/luv/owl.theme.css",
                "~/Content/luv/style.css"));

            bundles.Add(new ScriptBundle("~/bundles/luv/js").Include(
            "~/Scripts/luv/device.js",
            "~/Scripts/luv/jquery.easing.js",
            "~/Scripts/luv/jquery.magnific-popup.js",
            "~/Scripts/luv/jquery.nav.js",
            "~/Scripts/luv/jquery.nicescroll.js",
            "~/Scripts/luv/jquery.queryloader2.js",
            "~/Scripts/luv/jquery.sticky.js",
            "~/Scripts/luv/masonry.pkgd.js",
            "~/Scripts/luv/owl.carousel.js",
            "~/Scripts/luv/supersized.3.2.7.js",
            "~/Scripts/luv/supersized.shutter.js",
            "~/Scripts/luv/jquery.gmap.js",
            "~/Scripts/luv/waypoints.js",
            "~/Scripts/luv/script.js"));

            #endregion


            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
