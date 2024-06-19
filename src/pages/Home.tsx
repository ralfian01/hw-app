import {
  IonPage,
  IonToast,
} from "@ionic/react";
import BerandaLayouts from "@components/Layouts/BerandaLayouts";
import Header from "@components/Fragments/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setToast } from "@features/ui/uiSlice";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toast = useSelector((state: any) => state.ui.toast);
  const dispatch = useDispatch();


  return (
    <IonPage>
      <Header />
      <BerandaLayouts />

      <IonToast
        isOpen={toast}
        message="Double tap back button to exit."
        onDidDismiss={() => dispatch(setToast(false))} 
        duration={2000}
      />
    </IonPage>
  );
};

export default Home;
