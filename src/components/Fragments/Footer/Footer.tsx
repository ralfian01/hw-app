import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRippleEffect,
  IonIcon,
  IonButton,
  IonToolbar
} from "@ionic/react";
import { home, images, person, settings } from "ionicons/icons";

import { Icon } from "@iconify/react";
import ButtonTab from "@components/Elements/Button/ButtonTab";

const Footer = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <IonTabBar slot="bottom">
      <IonTabButton
        tab="home"
        href="/home">
        <IonIcon
          aria-hidden="true"
          icon={home}
        />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton
        tab="paket"
        href="/paket">
        <IonIcon
          aria-hidden="true"
          icon={images}
        />
        <IonLabel>Galery</IonLabel>
      </IonTabButton>
      <IonTabButton
        tab="portofolio"
        href="/portofolio">
        <IonIcon
          aria-hidden="true"
          icon={settings}
        />
        <IonLabel>Portofolio</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Footer;

/**
 *
 */
{
  /* <IonFooter className="shadow min-h-[5rem]"> */
}
//   <div className="flex flex-row items-center justify-evenly">
//     {/* home */}
//     <IonButton
//       fill="clear"
//       onClick={() => setActiveTab("/home")}>
//       <Link to="/home">
//         <ButtonTab
//           tab="home"
//           activeTab={activeTab}
//           href="/home"
//           iconActive="bi:house-door-fill"
//           iconNotActive="bi:house-door"
//         />
//       </Link>
//     </IonButton>

//     {/* paket */}
//     <IonButton
//       fill="clear"
//       onClick={() => setActiveTab("/home/paket")}>
//       <Link to="/home/paket">
//         <ButtonTab
//           tab="paket"
//           activeTab={activeTab}
//           href="/home/paket"
//           iconActive="mingcute:box-3-fill"
//           iconNotActive="mingcute:box-3-line"
//         />
//       </Link>
//     </IonButton>

//     {/* portofolio */}
//     <IonButton
//       fill="clear"
//       onClick={() => setActiveTab("/home/portofolio")}>
//       <Link to="/home/portofolio">
//         <ButtonTab
//           tab="portofolio"
//           activeTab={activeTab}
//           href="/home/portofolio"
//           iconActive="mingcute:layer-fill"
//           iconNotActive="mingcute:layer-line"
//         />
//       </Link>
//     </IonButton>

//     {/* profile */}
//     {login ? (
//       <IonButton
//         fill="clear"
//         onClick={() => setActiveTab("/home/profile")}>
//         <Link to="/home/profile">
//           <ButtonTab
//             tab="profile"
//             activeTab={activeTab}
//             href="/home/profile"
//             iconActive="bi:person-fill"
//             iconNotActive="bi:person"
//           />
//         </Link>
//       </IonButton>
//     ) : (
//       <IonButton
//         routerLink="/home/login"
//         style={{
//           "--border-radius": "10px 0 10px 10px",
//           "--padding-top": "10px",
//           "--padding-bottom": "10px"
//         }}>
        // <div className="flex flex-col items-center justify-center">
        //   <IonIcon
        //     icon={person}
        //     size="large"
        //   />
        //   <IonLabel className="font-montserrat font-semibold capitalize">
        //     Login
        //   </IonLabel>
        // </div>
//       </IonButton>
//     )}
//   </div>
// </IonFooter>
{
  /* <IonTabBar className="h-full rounded-t-2xl shadow-[0_-4px_9px_0px_rgba(0,0,0,0.1)]"> */
}
//   <IonTabButton
//     target="_blank"
//     tab="home"
//     href="/home"
//     className="ion-activatable ripple-parent rounded-none"
//     onClick={() => setActiveTab("/home")}>
//     <IonRippleEffect></IonRippleEffect>
// <ButtonTab
//   tab="home"
//   activeTab={activeTab}
//   href="/home"
//   iconActive="bi:house-door-fill"
//   iconNotActive="bi:house-door"
// />
//   </IonTabButton>

//   {/* paket */}
//   <IonTabButton
//     tab="paket"
//     href="/home/paket"
//     className="ion-activatable ripple-parent rounded-none"
//     onClick={() => setActiveTab("/home/paket")}>
//     <IonRippleEffect></IonRippleEffect>
{
  /* <ButtonTab
  tab="paket"
  activeTab={activeTab}
  href="/home/paket"
  iconActive="mingcute:box-3-fill"
  iconNotActive="mingcute:box-3-line"
/> */
}
//   </IonTabButton>

//   {/* portofolio */}
//   <IonTabButton
//     tab="portofolio"
//     href="/home/portofolio"
//     className="ion-activatable ripple-parent rounded-none"
//     onClick={() => setActiveTab("/home/portofolio")}>
//     <IonRippleEffect></IonRippleEffect>
//     <ButtonTab
//       tab="portofolio"
//       activeTab={activeTab}
//       href="/home/portofolio"
//       iconActive="mingcute:layer-fill"
//       iconNotActive="mingcute:layer-line"
//     />
//   </IonTabButton>

//   {/* login our profile */}
//   <IonTabButton className="ion-activatable ripple-parent rounded-none">
//     <IonRippleEffect></IonRippleEffect>
// <IonButton
//   routerLink="/home/login"
//   style={{
//     "--border-radius": "10px 0 10px 10px",
//     "--padding-top": "2.3px",
//     "--padding-bottom": "2.3px"
//   }}>
//   <div className="flex flex-col items-center justify-center">
//     <IonIcon
//       icon={person}
//       size="large"
//     />
//     <IonLabel className="font-montserrat font-semibold capitalize">
//       Login
//     </IonLabel>
//   </div>
// </IonButton>
//   </IonTabButton>
// </IonTabBar>
