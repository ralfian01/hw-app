import useToggleTabs from "@hooks/useToggleTabs";
import { Icon } from "@iconify/react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButton
} from "@ionic/react";

const Login = () => {
  useToggleTabs(false, true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            position: "sticky"
          }}>
          <IonButton
            slot="start"
            fill="clear"
            onClick={() => history.back()}>
            <Icon
              icon="ion:arrow-back"
              width={30}
              height={30}
            />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonButton
          color={"secondary"}
          routerLink="/register">
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
