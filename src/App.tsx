import { IonReactRouter } from "@ionic/react-router";
import { IonApp, setupIonicReact } from "@ionic/react";
import { SplashScreen as CapSplashScreen } from "@capacitor/splash-screen";
import SplashScreen from "@pages/SplashScreen";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* tailwind css */
import "./theme/tailwind.css";

/* Theme variables */
import "./theme/variables.scss";

/* Routing */
import Rootrouter from "./routes";

/* Provider for store redux */
import { Provider } from "react-redux";
import { store } from "@store/index";
import { useEffect, useState } from "react";
import { Network } from "@capacitor/network";

setupIonicReact();

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [networkStatus, setNetworkStatus] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    const checkNetworkStatus = async () => {
      const status = await Network.getStatus();
      setNetworkStatus(status.connected ? "online" : "offline");
      if (!status.connected) {
        setShowToast(true);
      }
      console.log("Network status:", status.connectionType);
    };

    checkNetworkStatus();

    Network.addListener("networkStatusChange", (status) => {
      console.log("Network status changed", status);
      setNetworkStatus(status.connected ? "online" : "offline");
      if (!status.connected) {
        setShowToast(true);
      }
    });

    const splashTimeout = setTimeout(() => {
      if (networkStatus === "online") {
        setShowSplash(false);
        CapSplashScreen.hide();
      }
    }, 3000);

    return () => {
      clearTimeout(splashTimeout);
      Network.removeAllListeners();
    };
  }, [networkStatus]);

  if (showSplash || networkStatus === "offline") {
    return <SplashScreen showToast={showToast} />;
  }

  return (
    <IonApp>
      <Provider store={store}>
        <IonReactRouter>
          <Rootrouter />
        </IonReactRouter>
      </Provider>
    </IonApp>
  );
};

export default App;
