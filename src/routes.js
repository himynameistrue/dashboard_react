/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Pattern.js";
import Icons from "views/Color.js";
import Typography from "views/Typography.js";
import TableList from "views/Forcast.js";
import Maps from "views/Fabric.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-circle-10",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Color",
    icon: "nc-icon nc-palette",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Fabric",
    icon: "nc-icon nc-scissors",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Pattern",
    icon: "nc-icon nc-layout-11",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Catwalks Advices",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Production Forcast",
    icon: "nc-icon nc-money-coins",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Upload Dataset",
    icon: "nc-icon nc-cloud-upload-94",
    component: Typography,
    layout: "/admin",
  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Settings",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Contact Us",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
