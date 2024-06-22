// import package
// import iconnify
import { Icon } from "@iconify/react";

// ModaL Dialog Components
const Modal = (props: any) => {
  return (
    <dialog
      id={props.id}
      className="modal backdrop-blur-xl"
      open={props.open}>
      {props.children}
    </dialog>
  );
};

// Modal Dialog Props
interface DialogProps {
  id?: string;
  open?: boolean;
  className?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  children?: any;
}

/**
 * 
 * @param param0 id, open, className, iconName, iconColor, iconSize
 * @returns 
 */

const Dialog: React.FC<DialogProps> = ({
  id,
  open,
  className,
  iconName,
  iconColor,
  iconSize,
  children
}) => {
  return (
    <Modal
      id={id}
      open={open}>
      <div className="modal-box bg-light">
        <h3 className="font-bold text-lg">
          <Icon
            icon={iconName ? iconName : "bi:emoji-frown-fill"}
            width={iconSize ? iconSize : 60}
            height={iconSize ? iconSize : 60}
            color={iconColor ? iconColor : "primary"}
            className="mx-auto"
          />
        </h3>
        <p
          className={`text-center font-montserrat font-semibold text-lg ${className}`}>
          {children}
        </p>
      </div>
      <form
        method="dialog"
        className="modal-backdrop">
        <button>close</button>
      </form>
    </Modal>
  );
};

// children Modal
Modal.Dialog = Dialog;
export default Modal;
