// import package

// import react router dom
import { Link } from "react-router-dom";

// import iconify
import { Icon } from "@iconify/react";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "@features/ui/uiSlice";

// import component react  cstm
import Card from "@components/Elements/Card/Card";
import Slide from "@components/Elements/Slide/Slide";
import ButtonPaket from "@components/Elements/Button/ButtonPaket";

// Package conatiner
const Package = (props: any) => {
  const { children, color, className } = props;
  return (
    <div
      className={`container relative z-10 bg-${color} -top-10 rounded-t-badge ${className}`}>
      {children}
    </div>
  );
};

// Package Tilte
interface TitleProps {
  name: string;
  link: string;
}
/**
 * @param TitleProps name, link
 * @returns string
 */

const Title: React.FC<TitleProps> = (TitleProps) => {
  const dispatch = useDispatch();
  const { name, link } = TitleProps;
  return (
    <div className="flex flex-row items-center justify-between py-3 px-5">
      <h1 className="font-montserrat text-xl font-semibold capitalize">
        {name}
      </h1>
      <Link
        to={link}
        onClick={() =>
          link.split("/")[1] !== "collection"
            ? dispatch(setPath(link.split("/")[1]))
            : null
        }
        className="text-primary font-montserrat font-semibold flex gap-1 items-center text-[1rem]">
        Lihat Semua{" "}
        <Icon
          icon="bi:chevron-right"
          width="20"
        />
      </Link>
    </div>
  );
};

// Package Beranda
const Home = () => {

  // useSelector data
  const { data_portofolio, kolleksi_slide, data_paket } = useSelector(
    (state: any) => state.ui.data
  );
  return (
    <Package color="light">
      {/* Paket */}
      <Title
        name="paket"
        link="/paket"
      />
      <div className="carousel carousel-center max-w-full px-2 space-x-5 pb-6">
        {data_paket.beranda.map((item: any, index: any) => (
          <div
            key={index}
            className="carousel-item card w-full shadow-md">
            <Card.Paket
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* portofolio */}
      <Title
        name="Portofolio"
        link="/portofolio"
      />
      <div className="carousel carousel-center max-w-full px-2 space-x-5 pb-6">
        {data_portofolio.map((item: any, index: any) => (
          <div
            key={index}
            className="carousel-item card w-full shadow-md">
            <Card.Portofolio
              key={index}
              id={item.id}
              image={item.image}
              desc={item.desc}
              title={item.title}
            />
          </div>
        ))}
      </div>

      {/* koleksi photo */}
      <Title
        name="Koleksi Foto"
        link="/collection"
      />
      <Slide images={kolleksi_slide} />
    </Package>
  );
};

// Package Paket
const Paket = () => {

  // useSelector data
  const path = useSelector((state: any) => state.ui.pathPaket);


  //   button paket
  const buttonPaket = [
    {
      path: "prewedding",
      name: "Prewedding",
      image: "/assets/icons/paket/prewedding.png"
    },
    {
      path: "wedding",
      name: "Wedding",
      image: "/assets/icons/paket/wedding.png"
    },
    {
      path: "engagement",
      name: "Engagement",
      image: "/assets/icons/paket/engagement.png"
    },
    {
      path: "add-on",
      name: "Add on",
      image: "/assets/icons/paket/add-on.png"
    }
  ];

  // data
  const { prewedding, wedding, engagement, add_on } = useSelector(
    (state: any) => state.ui.data.data_paket.more_paket
  );

  // render packages
  const renderPackages = (packages: any[]) => {
    return packages.map((item, index) => (
      <div
        className="shadow-md my-6 card"
        key={index}>
        <Card.Paket
          name={item.name}
          image={item.image}
          price={item.price}
        />
      </div>
    ));
  };


  // get packages based on path
  const getPackages = () => {
    switch (path) {
      case "prewedding":
        return renderPackages(prewedding);
      case "wedding":
        return renderPackages(wedding);
      case "engagement":
        return renderPackages(engagement);
      case "add-on":
        return renderPackages(add_on);
      default:
        return null;
    }
  };

  return (
    <Package>
      <div className="z-50 w-full carousel space-x-4 max-w-full">
        {buttonPaket.map((item, index) => (
          <div
            className="carousel-item my-2 w-7/12"
            key={index}>
            <ButtonPaket
              item={item}
              isActive={item.path === path}
            />
          </div>
        ))}
      </div>
      <div className="mx-2">{getPackages()}</div>
    </Package>
  );
};

// Package portofolio
const Portofolio = () => {
  const { data_portofolio } = useSelector((state: any) => state.ui.data);
  return (
    <Package color="light">
      <div className="mx-2 py-1">
        {data_portofolio.map((item: any, index: any) => (
          <div
            key={index}
            className="card w-full shadow-md my-6">
            <Card.Portofolio
              key={index}
              id={item.id}
              image={item.image}
              desc={item.desc}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </Package>
  );
};

// Package Collection
const Collection = () => {
  const { koleksi_poto } = useSelector((state: any) => state.ui.data);
  return (
    <Package color="light">
      <div className="mx-3 py-4">
        <Card.Collection koleksi={koleksi_poto} />
      </div>
    </Package>
  );
};


// children PACKAGE
Package.Home = Home;
Package.Paket = Paket;
Package.Portofolio = Portofolio;
Package.Collection = Collection;

export default Package;