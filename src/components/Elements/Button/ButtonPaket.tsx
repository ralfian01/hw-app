// import Package

// import component IONIC
import { IonButton, IonLabel } from "@ionic/react";

// HOOKS dispatch redux
import { useDispatch } from "react-redux";
import { setPathPaket } from "@features/ui/uiSlice";

// props BUTTONPAKET (khusus TAB BUTTON)


interface ButtonPaketProps {
  item: {
    path: string;
    name: string;
    image: string;
  };
  isActive: boolean;
}
/**
 * @param props item, isActive
 */

// BUTTON PAKET COMPONENT
const ButtonPaket: React.FC<ButtonPaketProps> = ({ item, isActive }) => {
  // dispatch
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
