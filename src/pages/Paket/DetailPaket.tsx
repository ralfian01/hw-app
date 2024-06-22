import Card from "@components/Elements/Card/Card";
import Modal from "@components/Elements/Modal/Dialog/modalDialog";
import useDataDetailPaket from "@hooks/useDataDetailPaket";
import useLogedin from "@hooks/useLogedin";
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
import { useState } from "react";
import { useParams } from "react-router";
interface Params {
  slug: string;
}
const DetailPaket = () => {
  const [open, setOpen] = useState(false);
  useToggleTabs(false, true);
  const { slug: slug } = useParams<Params>();
  const data = useDataDetailPaket(slug);

  // hooks login
  const isLoggedin = useLogedin();

  // showModal
  const modal = document.getElementById("modal-dialog-paket") as HTMLDialogElement | null;
  
  const handleNext = () => {
    if (!isLoggedin) {
      // setOpen(true);
      modal?.showModal();

    } else {
      alert("belum tersedia");
    }
  }

  return (
    <IonPage>
      <IonHeader
        role="heading"
        className="ion-no-border">
        <IonToolbar
          style={{
            "--background": "rgb(0,0,0,0.0)"
          }}>
          <div className="flex items-center justify-between w-[90%]">
            <IonButton
              slot="start"
              fill="clear"
              onClick={() => history.back()}>
              <Icon
                icon="bi:arrow-left"
                width={30}
                height={30}
              />
            </IonButton>
            <IonTitle className="font-montserrat font-semibold text-center">
              Detail Paket
            </IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="m-3 min-h-[90vh] flex flex-col justify-between">
          <div>
            <div className="card shadow-md">
              <Card.Paket
                image={data?.image}
                name={data?.name}
                price={data?.price}
                icon={false}
              />
            </div>
            <div className="h-[1.5px] bg-dark opacity-70 mt-10 my-2"></div>
            {data?.detailpaket ? (
              <div className="font-montserrat">
                <IonTitle
                  slot="start"
                  className="px-0 py-5">
                  <h1 className="font-semibold text-lg">
                    Pelayanan yang didapat
                  </h1>
                </IonTitle>
                <div className="text-lg font-montserrat font-normal">
                  {data?.detailpaket?.pelayanan?.map((item: any, i: any) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>

                <IonTitle
                  slot="start"
                  className="px-0 pt-5">
                  <h1 className="font-semibold text-lg">Barang yang didapat</h1>
                </IonTitle>
                <div className="text-lg my-3 font-montserrat font-normal">
                  {data?.detailpaket?.barang?.map((item: any, i: any) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="font-montserrat">
                <IonTitle
                  slot="start"
                  className="px-0 py-5">
                  <h1 className="font-semibold text-lg">Informasi lainnya</h1>
                </IonTitle>
                {data?.informasi?.map((item: any, i: any) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
          <IonButton
            expand="block"
            shape="round"
            onClick={handleNext}
            className="font-montserrat font-semibold capitalize text-sm">
            Lanjutkan
          </IonButton>
        </div>
        <Modal.Dialog id="modal-dialog-paket" iconColor="var(--warning)" iconName="bi:exclamation-circle-fill"
          className="font-montserrat font-semibold text-lg text-dark py-3">
          Opss! anda belum login 
        </Modal.Dialog>
      </IonContent>
    </IonPage>
  );
};

export default DetailPaket;
