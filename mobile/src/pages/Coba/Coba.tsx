import Navbar from "@components/Fragments/Navbar/Navbar";
import Banner from "@components/Fragments/Banner/Banner";
import About from "@components/Fragments/About/About";
import OurService from "@components/Fragments/OurService/OurService";
import Collection from "@components/Fragments/Collection/Collection";
import Portofolio from "@components/Fragments/Portofolio/Portofolio";
import Package from "@components/Fragments/Package/Package";
import { IonContent, IonPage } from "@ionic/react";
import ScrollSpy from "react-ui-scrollspy";
import HomeLanding from "@components/Layouts/LandingLayouts/HomeLanding";
import { Link } from "react-router-dom";
// import "./Coba.scss";

const Coba: React.FC = () => {
  const navLink = ["home", "about", "services", "portofolio", "package"];

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div style={{ overflowY: "scroll", height: "100%" }}>
      <div>
        <a onClick={(e) => onPress(e)} href="/coba#first">
          <div
            data-to-scrollspy-id="first"
            className={"ss-item"}>
            Section 1
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="/coba#second">
          <div
            data-to-scrollspy-id="second"
            className={"ss-item"}>
            Section 2
          </div>
        </a>
      </div>
      <ScrollSpy
        scrollThrottle={100}
        useBoxMethod={false}>
        <div
          id="first"
          className="min-h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
        <div
          id="second"
          className="min-h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
          veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
          voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
          Tempore, vero!
        </div>
      </ScrollSpy>
    </div>
  );
};

export default Coba;
