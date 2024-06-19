import { IonContent, IonPage, IonToast } from "@ionic/react";
import { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--i"?: number;
}

interface SplashScreenProps {
  showToast: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ showToast }) => {
  const characters = "Capturing Moments".split("");
  return (
    <IonPage>
      <IonContent>
        <div>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <img
              src="/assets/icons/logo.png"
              alt=""
              style={{
                WebkitBoxReflect:
                  "below 55px linear-gradient(transparent, rgba(0,0,0,.2)) "
              }}
            />
            <div className="waviy">
              {characters.map((char, index) => (
                <span
                  key={index}
                  style={{ "--i": index + 1 } as CustomCSSProperties}>
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
        <IonToast
          isOpen={showToast}
          message="No Internet Connection"
          duration={4000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
