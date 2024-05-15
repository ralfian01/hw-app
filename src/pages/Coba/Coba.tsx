import Slide from "@components/Elements/Slide/Slide";
import { IonContent, IonPage } from "@ionic/react";
// import "./Coba.scss";

const Coba: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="flex justify-center items-center my-2">
            <div className=" w-[80%] h-72">
            <Slide />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Coba;
