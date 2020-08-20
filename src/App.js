import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomeLayout from "./containers/Home";
// import AdminLayout from "./containers/Admin";
// import HomePage from "./containers/Home/HomePage";
// import AboutPage from "./containers/Home/AboutPage";
// import ListMovie from "./containers/Home/ListMovie";
// import DashboardPage from "./containers/Admin/DashboardPage";
// import AddUserPage from "./containers/Admin/AddUserPage";
import PageNotFound from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";

function App() {
  const showHomeLayout = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showAdminLayout = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {/* Trang Home - localhost:3000 */}
        {/* <Route exact path="/" component={HomeLayout} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list-movie" component={ListMovie} /> */}
        {showHomeLayout(routesHome)}

        {/* Trang Admin - localhost:3000/admin */}
        {/* <Route path="/admin" component={AdminLayout} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/add-user" component={AddUserPage} /> */}
        {showAdminLayout(routesAdmin)}

        {/* Page not found */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
