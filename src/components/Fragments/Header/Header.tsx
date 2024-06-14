import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import { search, headsetSharp } from "ionicons/icons";

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar
        style={{
          position: "fixed",
          "--background": "rgb(0,0,0,0.80)",
          "--color": "var(--light)",
        }}>
        <div className="-z-1 absolute bg-secondary backdrop-blur-sm h-full py-2 top-0 w-full bg-opacity-5"></div>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon
              slot="icon-only"
              icon={search}
            />
          </IonButton>
          <IonButton>
            <IonIcon
              slot="icon-only"
              icon={headsetSharp}
              className="bg-light text-primary p-1 rounded-full"
            />
          </IonButton>
        </IonButtons>
        <IonTitle>Welcome</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

/*
// <IonButtons slot="secondary">
//           <IonButton>
//             <IonIcon
//               slot="icon-only"
//               icon={search}
//             />
//           </IonButton>
//           <IonButton>
//             <IonIcon
//               slot="icon-only"
//               icon={headsetSharp}
//               className="bg-light text-primary p-1 rounded-full"
//             />
//           </IonButton>
//         </IonButtons>
//         <IonTitle>Welcome</IonTitle>
*/
