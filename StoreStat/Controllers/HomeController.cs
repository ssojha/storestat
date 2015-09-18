using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StoreStat.Models;


namespace StoreStat.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index( )
        {
            StoreStatModel exampple = new StoreStatModel();
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        [HttpGet]
        public ActionResult StoreDetails(int keyid)
        {
            var oldval = 0;

           
            return Json(new { success = true, oldval = oldval },
                        JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult BatchDetails(int keyid)
        {
            var oldval = 0;

          

            return Json(new { success = true, oldval = oldval },
                        JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult OrderDetails(int keyid)
        {
            var oldval = 0;

           
            return Json(new { success = true, oldval = oldval },
                        JsonRequestBehavior.AllowGet);
        }
         [HttpGet]
        public JsonResult StoreListOnMap()
        {
           // var oldval = 0;

            var data = new {data = new []{
                            new {Id= 1, PlaceName= "Store1", OpeningHours= "9-5, FLS",GeoLong= "53.410146", GeoLat="-2.979919",Strid="1" },
                           new 
                           {Id= 1, PlaceName= "Store1", OpeningHours= "9-5, FLS",GeoLong= "53.410146", GeoLat="-2.979919",Strid="1" },
                           new 
                           {Id= 1, PlaceName= "Store1", OpeningHours= "9-5, FLS",GeoLong= "53.410146", GeoLat="-2.979919",Strid="1" },
                           new 
                           {Id= 1, PlaceName= "Store1", OpeningHours= "9-5, FLS",GeoLong= "53.410146", GeoLat="-2.979919",Strid="1" }
                       }};
//                  { "Id": 2, "PlaceName": "Store2 ", "OpeningHours": "9-1,2-5, FLS", "GeoLong": "53.401217", "GeoLat": "-2.993052","Strid":"1" },
//                  { "Id": 3, "PlaceName": "Store3", "OpeningHours": "9-7, FLS", "GeoLong": "53.409839", "GeoLat": "-2.979447","Strid":"1" },
//                  { "Id": 4, "PlaceName": "Store4", "OpeningHours": "10-6, FLS", "GeoLong": "53.407511", "GeoLat": "-2.984683","Strid":"1" }
//               ];

//            var data1= new {data1 = new [] {
//    new {name = "command" , index = "X", optional = "0"}, 
//    new {name = "command" , index = "X", optional = "0"}
//}};
            return Json(data,JsonRequestBehavior.AllowGet);
        }
       

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
