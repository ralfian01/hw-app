import Banner from "@components/Fragments/Banner/Banner";
import Package from "@components/Fragments/Package/Package";
import { IonContent } from "@ionic/react";

const BerandaLayouts = () => {
  return (
    <IonContent>
      {/* Banner */}
      <Banner.BannerHome />

      {/* Package Home */}
      <Package.Home />
    </IonContent>
  );
};

export default BerandaLayouts;
