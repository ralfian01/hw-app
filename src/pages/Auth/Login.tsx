import AuthLayouts from "@components/Layouts/AuthLayouts";
import useScrollVisibility from "@hooks/useScrollVisibility";
import useToggleTabs from "@hooks/useToggleTabs";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const Login = () => {
  useToggleTabs(false, true);
  const { refScrollPage, isVisible } = useScrollVisibility(0.25);
  const history = useIonRouter();

  useEffect(() => {
    GoogleAuth.initialize({
      clientId:
        "569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });
  }, []);


  return (
    <IonPage>
      <IonHeader
        role="heading"
        className="ion-no-border">
        <IonToolbar
          style={{
            "--background": `${isVisible ? "none" : "rgb(255,255,255,1.0)"}`,
            transition: "background 300ms ease-in-out"
          }}>
          <IonButton
            slot="start"
            fill="clear"
            color={"dark"}
            onClick={() => history.goBack()}>
            <Icon
              icon="bi:arrow-left"
              width={30}
              height={30}
            />
            Back
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent
        ref={refScrollPage}
        scrollEvents={true}
        fullscreen>
        <AuthLayouts login={true} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
