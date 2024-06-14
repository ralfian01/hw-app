import Banner from "@components/Fragments/Banner/Banner";
import Package from "@components/Fragments/Package/Package";
import { IonContent } from "@ionic/react";

const PortofolioLayouts = () => {
  return (
    <IonContent>
      <Banner.Package
        banner="/assets/img/banner/banner-portofolio.jpg"
        Bannername="Portofolio"
      />
      <Package.Portofolio />
    </IonContent>
  );
};

export default PortofolioLayouts;
