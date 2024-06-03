import React from "react";
import { IonButton, IonLabel } from "@ionic/react";
import { useDispatch } from "react-redux";
import { setPathPaket } from "@features/ui/uiSlice";

interface ButtonPaketProps {
  item: {
    path: string;
    name: string;
    image: string;
  };
  isActive: boolean;
}

const ButtonPaket: React.FC<ButtonPaketProps> = ({ item, isActive }) => {
  const dispatch = useDispatch();

  return (
    <IonButton
      expand="block"
      shape="round"
      className="w-full px-2"
      onClick={() => dispatch(setPathPaket(item.path))}
      color={isActive ? "primary" : "light"}
      style={{
        "--padding-top": "10px",
        "--padding-bottom": "10px"
      }}>
      <div className="flex flex-row items-center justify-center gap-2">
        <IonLabel className="font-montserrat font-semibold text-lg">
          {item.name}
        </IonLabel>
        <img
          src={item.image}
          alt={item.name}
          width={30}
        />
      </div>
    </IonButton>
  );
};

export default ButtonPaket;
