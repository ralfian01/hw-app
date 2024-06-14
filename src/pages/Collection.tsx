import CollectionLayouts from "@components/Layouts/CollectionLayouts";
import useToggleTabs from "@hooks/useToggleTabs";
import { Icon } from "@iconify/react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButton
} from "@ionic/react";

const Collection = () => {
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
      <CollectionLayouts />
    </IonPage>
  );
};

export default Collection;
