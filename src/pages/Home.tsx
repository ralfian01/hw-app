import {
  IonPage,
} from "@ionic/react";
import BerandaLayouts from "@components/Layouts/BerandaLayouts";
import Header from "@components/Fragments/Header/Header";
import Footer from "@components/Fragments/Footer/Footer";

const Home = () => {

  return (
    <IonPage>
      <Header />
      <BerandaLayouts />  
      {/* <Footer /> */}
    </IonPage>
  );
};

export default Home;
