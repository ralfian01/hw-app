import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/**
 * pages: React.FC<{}>
 */
import Home from "@pages/Home/Home";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import Coba from "@pages/Coba/Coba";

/**
 * RouteInterface: React.FC<{}>
 */
interface RouteInterface {
  path: string;
  pages: React.FC<{}>;
  exact: boolean;
  guard?: any;
}

/**
 * routes: RouteInterface[]
 * pages: React.FC<{}>
 * exact: boolean
 */
const routes: RouteInterface[] = [
  {
    path: "/home",
    pages: Home,
    exact: true
  },
  {
    path: "/coba",
    pages: Coba,
    exact: true
  },
  {
    path: "/login",
    pages: Login,
    exact: true,
    guard: true
  },
  {
    path: "/register",
    pages: Register,
    exact: true
  }
];

/**
 * Rootrouter: React.FC<{}>
 */

const Rootrouter = () => {
  const token = localStorage.getItem("token");

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route
          exact
          path="/">
          <Redirect to="/home" />
        </Route>
        {routes.map((route) => {
          if (route.guard && token) {
            return (
              <Redirect
                key={route.path}
                from={route.path}
                to="/home"
                exact={route.exact}
              />
            );
          } else {
            // Jika tidak, render rute sesuai kebutuhan
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.pages}
                exact={route.exact}
              />
            );
          }
        })}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Rootrouter;
