import HomeLayout from "../containers/Home";
import HomePage from "../containers/Home/HomePage";
import AboutPage from "../containers/Home/AboutPage";
import ListMovie from "../containers/Home/ListMovie";
import AdminLayout from "../containers/Admin";
import DashboardPage from "../containers/Admin/DashboardPage";
import AddUserPage from "../containers/Admin/AddUserPage";
import HOC from "../containers/Home/HOC";
import DetailPage from "../containers/Home/DetailPage";
import Login from "../containers/Home/Login/Login";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMovie,
  },
  {
    exact: false,
    path: "/hoc",
    component: HOC,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/login",
    component: Login,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/admin",
    component: AdminLayout,
  },
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];

export { routesHome, routesAdmin };
