import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import "./Card.scss";
import IonPhotoViewer from "@codesyntax/ionic-react-photo-viewer";

// conatiner card
const Card = (props: any) => {
  const { children, name, image } = props;
  return (
    <>
      <figure className="flex flex-col">
        <h1 className="m-0 text-light font-montserrat font-semibold bg-dark opacity-70 uppercase w-full text-center text-lg mix-blend-multiply">
          {name}
        </h1>
        <img
          src={image}
          alt={image}
          className={`w-full h-[14rem] rounded-bl-box object-cover bg-center bg-cover`}
        />
      </figure>
      {children}
    </>
  );
};

// format number rupiah
const formatRp = (angka: number) => {
  return angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  });
};

// card paket
interface PaketProps {
  name?: string;
  image?: string;
  price?: number;
}
/**
 * @param props
 * @typeParams
 * @returns
 */
const Paket: React.FC<PaketProps> = (props: PaketProps) => {
  const { name = "card", image = "", price = 0 } = props;
  return (
    <Card
      name={name}
      image={image}>
      <div className="flex justify-between items-center px-4 py-2">
        <h2 className="card-title font-montserrat">{formatRp(price)}</h2>
        <IonIcon
          icon={chevronForward}
          size="small"
          className="text-primary bg-opacity-50 rounded-full border-primary border-2 p-[2px] cursor-pointer"
        />
      </div>
    </Card>
  );
};

// Card Portofolio
interface PackageProps {
  image?: string;
  desc?: string;
  title?: string;
}
/**
 * @param props data
 * @typeParams data: array of object
 * @returns
 */
const Portofolio: React.FC<PackageProps> = (props: PackageProps) => {
  const { image, desc = "description", title = "title" } = props;
  return (
    <Card image={image}>
      <div className="items-center px-2">
        <p className="text-center font-alex-brush py-1">{desc}</p>
        <h2 className="card-title font-montserrat text-[1.4rem] text-center pb-2">
          {title}
        </h2>
      </div>
    </Card>
  );
};

// Card Portofolio
interface CollectionProps {
  koleksi?: Array<any>;
}
/**
 * @param props data
 * @typeParams data: array of object
 * @returns
 */
const Collection: React.FC<CollectionProps> = ({
  koleksi
}: CollectionProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {koleksi?.map((item, index) => (
        <IonPhotoViewer
          key={index}
          title=""
          src={item}
          showHeader={false}>
          <img
            src={item}
            alt={item}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </IonPhotoViewer>
      ))}
    </div>
  );
};

Card.Paket = Paket;
Card.Portofolio = Portofolio;
Card.Collection = Collection;

export default Card;
