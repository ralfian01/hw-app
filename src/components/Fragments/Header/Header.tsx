// import package
// import components
import ModalSearch from "@components/Elements/Modal/Search/ModalSearch";

// import iconnify
import { Icon } from "@iconify/react";

// import components IONIC
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonLabel,
} from "@ionic/react";

// import services auth
import { getInfoLogin } from "@services/auth.services";

// import react state
import { useState } from "react";

const Header = () => {

  // get info login
  const { authorization, username, name } = getInfoLogin();

  // set state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonHeader>
      <IonToolbar
        style={{
          position: "fixed",
          "--background": "rgb(0,0,0,0.80)",
          "--color": "var(--light)"
        }}>
        <div className="-z-1 absolute bg-secondary backdrop-blur-sm h-full py-2 top-0 w-full bg-opacity-5"></div>
        <IonButtons slot="secondary">
          <IonButton onClick={() => setIsOpen(true)}>
            <Icon
              icon={"iconamoon:search"}
              width={30}
            />
          </IonButton>
        </IonButtons>

        <IonTitle>
          {authorization ? (
            <div className="flex items-center gap-2">
              <IonAvatar className="flex items-center bg-gray justify-center w-10 h-10 mix-blend-multiply bg-opacity-70">
                <Icon
                  icon="ion:person-outline"
                  width={30}
                  height={30}
                  className="text-center text-dark"
                />
              </IonAvatar>
              <IonLabel class="font-montserrat text-lg">
                {authorization ? (name === "-" ? username : name) : "Guest"}
              </IonLabel>
            </div>
          ) : (
            "Welcome"
          )}
        </IonTitle>
      </IonToolbar>
      <ModalSearch
        isOpen={isOpen}
        onCLick={() => setIsOpen(false)}
      />
    </IonHeader>
  );
};

export default Header;
