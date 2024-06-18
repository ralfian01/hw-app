import CollectionLayouts from "@components/Layouts/CollectionLayouts";
import useScrollVisibility from "@hooks/useScrollVisibility";
import useToggleTabs from "@hooks/useToggleTabs";
import { Icon } from "@iconify/react";
import { IonHeader, IonToolbar, IonPage, IonButton } from "@ionic/react";

const Collection = () => {
  useToggleTabs(false, true);

  const { refScrollPage, isVisible } = useScrollVisibility(0.25);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            position: "fixed",
            top: 0,
            "--background": `${isVisible ? "none" : "rgb(255,255,255,1.0)"}`,
            transition: "background 300ms ease-in-out"
          }}>
          <IonButton
            slot="start"
            fill="clear"
            color={"dark"}
            onClick={() => history.back()}>
            <Icon
              icon="ion:arrow-back"
              width={30}
              height={30}
            />
            Back
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <CollectionLayouts refContent={refScrollPage} />
    </IonPage>
  );
};

export default Collection;
