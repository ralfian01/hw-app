import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonPage
} from "@ionic/react";
const Register = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            position: "sticky"
          }}>
          <IonButtons slot="start">
            <IonBackButton color={"dark"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>Register</IonContent>
    </IonPage>
  );
};

export default Register;
