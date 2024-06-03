import { IonPage } from "@ionic/react";
import PortofolioLayouts from "@components/Layouts/PortofolioLayouts";
import Header from "@components/Fragments/Header/Header";
import Footer from "@components/Fragments/Footer/Footer";

const Portofolio = () => {
  return (
    <IonPage>
      <Header />
      <PortofolioLayouts />
      {/* <Footer /> */}
    </IonPage>
  );
};

export default Portofolio;
