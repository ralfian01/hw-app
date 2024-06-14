import { Icon } from "@iconify/react";
import { IonLabel } from "@ionic/react";

interface ButtonTabProps {
  tab: string;
  activeTab: string;
  iconActive: string;
  iconNotActive: string;
  href?: string;
}

/**
 *
 * @param props tab, activeTab, iconActive, iconNotActive
 * @returns
 */

const ButtonTab: React.FC<ButtonTabProps> = ({
  tab,
  activeTab,
  iconActive,
  iconNotActive,
}: ButtonTabProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {activeTab === tab ? (
        <Icon
          icon={iconActive}
          width={30}
          height={30}
          className="text-primary"
        />
      ) : (
        <Icon
          icon={iconNotActive}
          width={30}
          height={30}
          className="text-neutral-500"
        />
      )}
      <IonLabel
        className={`text-sm font-montserrat font-semibold capitalize ${
          activeTab === tab ? "text-primary" : "text-neutral-700"
        }`}>
        {tab}
      </IonLabel>
    </div>
  );
};

export default ButtonTab;
