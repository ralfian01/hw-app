import { Icon } from "@iconify/react";
import { IonAvatar, IonContent, IonLabel } from "@ionic/react";
import { getInfoLogin } from "@services/auth.services";

const ProfileLayouts = () => {
  const { username, name, noHp } = getInfoLogin();

  return (
    <IonContent fullscreen>
      <div className="flex flex-col">
        <div className="bg-primary flex gap-4 items-center px-4 py-5">
          <IonAvatar className="flex items-center bg-gray justify-center w-16 h-16 bg-opacity-70">
            <Icon
              icon="mingcute:user-3-fill"
              width={45}
              height={45}
              className="text-center text-light"
            />
          </IonAvatar>
          <div className="flex flex-col">
            <p className="font-semibold text-xl font-montserrat text-light">
              {name === "-" ? username : name}
            </p>
            <span className="text-light text-[14px] font-montserrat relative -top-1">
              {noHp === "-" ? "Nomor telepon belum di pasang" : noHp}
            </span>
          </div>
        </div>
        <div className="min-h-screen bg-light w-full absolute opacity-50 -z-10">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <img
              src="/assets/icons/logo.png"
              alt=""
              className="w-52 blur-[2px]"
            />
            <h1 className="blur-[2px] text-primary font-alex-brush text-3xl py-4 font-semibold">
              Capturing Moments
            </h1>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default ProfileLayouts;
