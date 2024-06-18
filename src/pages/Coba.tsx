import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import useLoginGoogle from "@hooks/useLoginGoogle";

const Coba = () => {
  const { googleAuthResult, loginWithGoogle } = useLoginGoogle();
  const [hasil, setHasil] = useState<any>(null);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    GoogleAuth.initialize({
      clientId:
        "569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });
  }, []);

  const LoginWithGoogle = async () => {
    try {
      const result = await GoogleAuth.signIn();
      if (result && result.authentication) {
        setHasil(JSON.stringify(result));
        console.log(result);
      } else {
        console.log("Google authentication failed or cancelled");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Custom function to refresh token

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex items-center justify-center min-h-screen">
          {hasil ? (
            <div className="flex flex-col w-80">
              <p className="">{JSON.stringify(hasil)}</p>
            </div>
          ) : (
            <>
              <IonButton onClick={LoginWithGoogle}>Login with Google</IonButton>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Coba;
