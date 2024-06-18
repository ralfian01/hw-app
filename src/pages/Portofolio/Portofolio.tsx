import { IonPage, useIonRouter } from "@ionic/react";
import PortofolioLayouts from "@components/Layouts/PortofolioLayouts";
import Header from "@components/Fragments/Header/Header";

const Portofolio = () => {
  const history = useIonRouter();

  // document.addEventListener("ionBackButton", (ev: any) => {
  //   ev.detail.register(10, () => {
  //     history.push("/home", "root", "pop");
  //   });
  // });
  return (
    <IonPage>
      <Header />
      <PortofolioLayouts />
    </IonPage>
  );
};

export default Portofolio;
