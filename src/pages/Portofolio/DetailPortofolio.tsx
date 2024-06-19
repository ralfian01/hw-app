import Card from "@components/Elements/Card/Card";
import Banner from "@components/Fragments/Banner/Banner";
import useDataDetailPorto from "@hooks/useDataDetailPorto";
import useScrollVisibility from "@hooks/useScrollVisibility";
import useToggleTabs from "@hooks/useToggleTabs";
import { Icon } from "@iconify/react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useParams } from "react-router";

interface Params {
  id: string;
}
const DetailPortofolio = () => {
  useToggleTabs(false, true);
  const { refScrollPage, isVisible } = useScrollVisibility(0.25);
  const { id } = useParams<Params>();
  const { data, koleksi } = useDataDetailPorto(id);
  const koleksi_poto = koleksi.slice(0, 9);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            position: "fixed",
            top: 0,
            "--background": `${
              isVisible ? "rgba(255,255,255,0.60)" : "rgb(255,255,255,1.0)"
            }`,
            transition: "background 300ms ease-in-out"
          }}>
          <IonButton
            slot="start"
            fill="clear"
            color={"dark"}
            onClick={() => history.back()}>
            <Icon
              icon="ion:arrow-back"
              width={30}
              height={30}
            />
            Back
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent
        ref={refScrollPage}
        scrollEvents={true}>
        <Banner.Package
          banner={data.image}
          className="bg-neutral-900 bg-opacity-30 mix-blend-multiply"
          style={{ backdropFilter: "none" }}>
          <h1 className="z-10 text-center text-light text-5xl font-montserrat font-semibold uppercase drop-shadow-md flex flex-col gap-2">
            <span>aditya</span>
            <span>&</span>
            <span>kirana</span>
            <span className="text-xs pt-2">We’re Getting Married!</span>
          </h1>
        </Banner.Package>
        <div className="p-4">
          <p className="px-2 text-center font-montserrat text-sm">
            "Hari ini adalah awal dari babak baru dalam kisah cinta kita, di
            mana setiap halaman diisi dengan warna-warna baru dan petualangan
            yang menakjubkan. Aku berjanji untuk menjadi muara cinta yang tak
            pernah kering untukmu, menemanimu di lautan kehidupan, dan bersama
            kita akan menemukan harta karun sejati dalam kebersamaan kita."
          </p>
          <p className="text-center font-bold text-xl py-4">Aditya & Kirana</p>
        </div>
        <div className="bg-gray flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center py-4 items-center">
            <img
              src={data.image}
              alt=""
              className="w-32 h-32 rounded-badge shadow-xl object-cover"
            />
            <h3 className="text-center font-montserrat font-semibold pt-4">
              The Ceremony
            </h3>
          </div>
          <h2 className="font-semibold font-montserrat py-2">4:00 PM</h2>
          <span className="w-28 text-center font-montserrat leading-10">
            Grace Church 37 Bear Blvd Flagstaff, AZ 86001
          </span>
        </div>
        <div className="py-4">
          <h3 className="text-center font-montserrat font-semibold py-2">
            Foto
          </h3>
          <div className="h-[1.3px] w-full bg-dark"></div>
          <div className="mx-3 py-4">
            <Card.Collection koleksi={koleksi_poto} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DetailPortofolio;
