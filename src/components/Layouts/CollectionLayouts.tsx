import Banner from "@components/Fragments/Banner/Banner";
import Package from "@components/Fragments/Package/Package";
import { IonContent } from "@ionic/react";

const CollectionLayouts = () => {
  return (
    <IonContent>
      <Banner.Package
        banner="/assets/img/banner/banner-collection.jpeg"
        Bannername="Koleksi foto"
      />

      <Package.Collection />
    </IonContent>
  );
};

export default CollectionLayouts;
