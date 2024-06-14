import Banner from "@components/Fragments/Banner/Banner";
import Package from "@components/Fragments/Package/Package";
import { IonContent } from "@ionic/react";

const PaketLayouts = () => {
  return (
    <IonContent>
      <Banner.Package
        banner="/assets/img/banner/banner-paket.jpeg"
        Bannername="Paket"
      />

      <Package.Paket />
    </IonContent>
  );
};

export default PaketLayouts;
