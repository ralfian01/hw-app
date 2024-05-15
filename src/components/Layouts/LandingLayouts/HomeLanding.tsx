import Navbar from "@components/Fragments/Navbar/Navbar";
import Banner from "@components/Fragments/Banner/Banner";
import About from "@components/Fragments/About/About";
import OurService from "@components/Fragments/OurService/OurService";
import Collection from "@components/Fragments/Collection/Collection";
import Portofolio from "@components/Fragments/Portofolio/Portofolio";
import { IonContent } from "@ionic/react";
import Package from "@components/Fragments/Package/Package";
import Footer from "@components/Fragments/Footer/Footer";

const HomeLanding = () => {
  return (
    <IonContent style={{ "--background": "var(--secondary)" }}>
      <Navbar />
      <Banner id="home" />
      <div className="container shadow-md bg-light">
        <About id="about" />
        <OurService />
        <Collection />
        <Portofolio />
        <Package />
      </div>
      <Footer />
    </IonContent>
  );
};

export default HomeLanding;
