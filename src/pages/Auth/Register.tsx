import AuthLayouts from "@components/Layouts/AuthLayouts";
import useScrollVisibility from "@hooks/useScrollVisibility";
import { Icon } from "@iconify/react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButton,
  useIonRouter
} from "@ionic/react";
const Register = () => {
  const { refScrollPage, isVisible } = useScrollVisibility(0.25);
  const history = useIonRouter()
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
      <IonContent fullscreen={true} scrollEvents={true} ref={refScrollPage}>
        <AuthLayouts login={false} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
