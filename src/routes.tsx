import { Redirect, Route } from "react-router-dom";
import {
  IonButton,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "@features/ui/uiSlice";
import { Icon } from "@iconify/react";

import Home from "@pages/Home";
import Paket from "@pages/Paket";
import Portofolio from "@pages/Portofolio";
import Profile from "@pages/Profile";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";

import ButtonTab from "@components/Elements/Button/ButtonTab";
import Collection from "@pages/Collection";

interface RouteInterface {
  path: string;
  pages: React.FC<{}>;
  exact?: boolean;
  guard?: any;
}

const routes: RouteInterface[] = [
  {
    path: "/home",
    pages: Home,
    exact: true
  },
  {
    path: "/paket",
    pages: Paket
  },
  {
    path: "/portofolio",
    pages: Portofolio
  },
  {
    path: "/collection",
    pages: Collection
  },
  {
    path: "/profile",
    pages: Profile
  },
  {
    path: "/login",
    pages: Login
  },
  {
    path: "/register",
    pages: Register
  }
];

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

const Rootrouter = () => {
  const [login, setLogin] = useState(false);

  const showTabs = useSelector((state: any) => state.ui.showTabs);
  const path = useSelector((state: any) => state.ui.path);
  const dispatch = useDispatch();

  return (
    <IonReactRouter>
      <IonTabs onIonTabsDidChange={(e) => dispatch(setPath(e.detail.tab))}>
        <IonRouterOutlet>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}>
              <route.pages />
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
          className={`h-20 rounded-t-3xl shadow-[0_-4px_9px_0px_rgba(0,0,0,0.1)] ${
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
          {login ? (
            <IonTabButton
              tab="profile"
              href="/profile"
              className="h-full">
              <ButtonTab
                tab="profile"
                activeTab={path}
                iconActive="bi:person-fill"
                iconNotActive="bi:person"
              />
            </IonTabButton>
          ) : (
            <IonTabButton>
              <IonButton
                routerLink="/login"
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
    </IonReactRouter>
  );
};

export default Rootrouter;
