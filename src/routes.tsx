// react router dom
import { Redirect, Route } from "react-router-dom";

// Component ionic
import {
  IonButton,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter
} from "@ionic/react";

// redux toolkit
import { useDispatch, useSelector } from "react-redux";

// state slice redux
import { setPath, setToast } from "@features/ui/uiSlice";

// Component icon
import { Icon } from "@iconify/react";

// Component React
import ButtonTab from "@components/Elements/Button/ButtonTab";

// Pages React
import Home from "@pages/Home";
import Paket from "@pages/Paket/Paket";
import DetailPaket from "@pages/Paket/DetailPaket";
import Portofolio from "@pages/Portofolio/Portofolio";
import DetailPortofolio from "@pages/Portofolio/DetailPortofolio";
import Profile from "@pages/Profile";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import Collection from "@pages/Collection";
import Coba from "@pages/Coba";

// hooks
import useLogedin from "@hooks/useLogedin";
import { useEffect, useState } from "react";
import { App } from "@capacitor/app";

// interface router
interface RouteInterface {
  path: string;
  pages: React.FC<{}>;
  exact?: boolean;
  guard?: any;
  redirect?: any;
}
/**
 * Routes
 * @param RouteInterface
 * @returns React.FC
 */
const routes: RouteInterface[] = [
  { path: "/home", pages: Home },
  { path: "/paket", pages: Paket },
  { path: "/detail-paket/:slug", pages: DetailPaket, exact: true },
  { path: "/portofolio", pages: Portofolio },
  { path: "/detail-portofolio/:id", pages: DetailPortofolio, exact: true },
  { path: "/collection", pages: Collection },
  { path: "/profile", pages: Profile },
  { path: "/login", pages: Login, exact: true },
  { path: "/register", pages: Register, exact: true },

  { path: "/coba", pages: Coba, exact: true }
];

// tabs button icon and href
const tabs = [
  {
    tab: "home",
    href: "/home",
    iconActive: "bi:house-door-fill",
    iconNotActive: "bi:house-door"
  },
  {
    tab: "paket",
    href: "/paket",
    iconActive: "mingcute:box-3-fill",
    iconNotActive: "mingcute:box-3-line"
  },
  {
    tab: "portofolio",
    href: "/portofolio",
    iconActive: "mingcute:layer-fill",
    iconNotActive: "mingcute:layer-line"
  }
];

// router root
const Rootrouter = () => {
  // const [tap, setTap] = useState(0);
  // state redux
  const showTabs = useSelector((state: any) => state.ui.showTabs);
  const path = useSelector((state: any) => state.ui.path);
  const toast = useSelector((state: any) => state.ui.toast);

  // hooks login
  const isLoggedin = useLogedin();

  // hooks dispatch redux
  const dispatch = useDispatch();

  // hooks ionic
  const history = useIonRouter();
  const routing = history.routeInfo;

  // set path boolean path login
  useEffect(() => {
    if (isLoggedin) {
      dispatch(setPath("home"));
    }
  }, [isLoggedin]);

  // path actived tab
  useEffect(() => {
    dispatch(setPath(routing.pathname.split("/")[1]));
  }, [routing.pathname, dispatch]);

  // Filter rute berdasarkan kondisi login
  const filteredRoutes = routes.map((route) => {
    if ((route.path === "/login" || route.path === "/register") && isLoggedin) {
      return {
        ...route,
        redirect: "/home"
      };
    }
    if (route.path === "/profile" && !isLoggedin) {
      return {
        ...route,
        redirect: "/login"
      };
    }
    return route;
  });


  let tap = 0;
  const pathTab = ["/home", "/paket", "/portofolio"];
  useEffect(() => {
    const handleBackButton = (ev: any) => {
      ev.detail.register(10, () => {
        if (routing.pathname === "/home") {
          tap += 1;
          if (tap === 1) {
            setTimeout(() => {
              tap = 0;
              dispatch(setToast(true))
            }, 300);
          } else if (tap === 2) {
            App.exitApp();
          }
        } else {
          if (pathTab.includes(routing.pathname)) {
            history.push("/home", "root", "pop");
            dispatch(setPath("home"));
          } else {
            history.goBack();
          }
        }
      });
    };

    document.addEventListener("ionBackButton", handleBackButton);

    return () => {
      document.removeEventListener("ionBackButton", handleBackButton);
    };
  }, [routing.pathname, history, dispatch]);

  return (
    <IonTabs>
      <IonRouterOutlet>
        {filteredRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}>
            {route.redirect ? (
              <Redirect to={route.redirect} />
            ) : (
              <route.pages />
            )}
          </Route>
        ))}
        <Route
          exact
          path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className={`h-20 rounded-t-3xl shadow-[0_-4px_11px_0px_rgba(0,0,0,0.20)] ${
          showTabs ? "" : "h-0"
        } transition-all duration-200 ease-in-out`}
        style={{
          height: `${showTabs ? "" : "0"}`
        }}>
        {tabs.map((item, index) => (
          <IonTabButton
            key={index}
            tab={item.tab}
            href={item.href}
            className="h-full">
            <ButtonTab
              tab={item.tab}
              activeTab={path}
              iconActive={item.iconActive}
              iconNotActive={item.iconNotActive}
            />
          </IonTabButton>
        ))}
        {isLoggedin ? (
          <IonTabButton
            className="h-full"
            tab="profile"
            href="/profile">
            <ButtonTab
              tab="profile"
              activeTab={path}
              iconActive="bi:person-fill"
              iconNotActive="bi:person"
            />
          </IonTabButton>
        ) : (
          <IonTabButton
            tab="login"
            href="/login">
            <IonButton
              style={{
                "--border-radius": "10px 0 10px 10px",
                "--padding-top": "8px",
                "--padding-bottom": "8px",
                "--color": "var(--light)",
                "--padding-start": "20px",
                "--padding-end": "20px"
              }}>
              <div className="flex flex-col items-center justify-center">
                <Icon
                  icon="bi:person-fill"
                  width={30}
                  height={30}
                />
                <IonLabel className="font-montserrat font-semibold capitalize">
                  Login
                </IonLabel>
              </div>
            </IonButton>
          </IonTabButton>
        )}
      </IonTabBar>
    </IonTabs>
  );
};

export default Rootrouter;
