import Navbar from "@components/Fragments/Navbar/Navbar";
import Banner from "@components/Fragments/Banner/Banner";
import About from "@components/Fragments/About/About";
import OurService from "@components/Fragments/OurService/OurService";
import Collection from "@components/Fragments/Collection/Collection";
import Portofolio from "@components/Fragments/Portofolio/Portofolio";
import Package from "@components/Fragments/Package/Package";
import Footer from "@components/Fragments/Footer/Footer";

import { IonContent } from "@ionic/react";
import ScrollSpy from "react-ui-scrollspy";

const HomeLanding = () => {
  return (
    <IonContent style={{ "--background": "var(--secondary)" }}>
      <Navbar />
      <ScrollSpy scrollThrottle={100}>
        <Banner id="home" />
        <div className="container shadow-md bg-light">
          <About id="about" />
          <OurService id="services" />
          <Collection id="collection" />
          <Portofolio id="portofolio" />
          <Package id="package" />
        </div>
      </ScrollSpy>
      <Footer />
    </IonContent>
  );
};

export default HomeLanding;
