import { Icon } from "@iconify/react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from "@ionic/react";
import Card from "../Card/Card";
import "./ModalSearch.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

// Interface for props
interface ModalSearchProps {
  isOpen: boolean;
  onCLick: () => void;
}

// Icon component for no search results
const IconNoSearch = () => (
  <div className="p-4 flex flex-col items-center">
    <div className="relative">
      <Icon
        icon="bi:emoji-frown-fill"
        width={150}
        height={150}
        className="text-primary text-center mx-auto"
      />
      <Icon
        icon="bi:question-lg"
        width={50}
        height={50}
        className="text-primary absolute top-1 translate-x-10 -translate-y-1/2 left-1/2"
      />
    </div>
    <h2 className="text-lg font-montserrat font-semibold pt-4 text-wrap text-center">
      Tidak menemukan apa yang kamu cari
    </h2>
    <p className="text-center font-montserrat">
      Coba gunakan kata kunci yang berbeda
    </p>
  </div>
);

// Komponen untuk menampilkan kartu Paket
const PaketCard = ({ item, onCLick }: any) => (
  <div
    className="card w-full shadow-md my-6"
    onClick={onCLick}>
    <Card.Paket
      name={item.name}
      image={item.image}
      price={item.price}
    />
  </div>
);

// Komponen untuk menampilkan kartu Portofolio
const PortofolioCard = ({ item, onCLick }: any) => (
  <div
    className="card w-full shadow-md my-6"
    onClick={onCLick}>
    <Card.Portofolio
      id={item.id}
      title={item.title}
      image={item.image}
    />
  </div>
);

// Komponen untuk menampilkan hasil pencarian
const SearchResult = ({ filteredResults, query, onCLick }: any) => {
  if (query.trim() !== "" && filteredResults.length > 0) {
    return filteredResults.map((item: any, i: any) => {
      if (item.tipe === "paket") {
        return (
          <PaketCard
            key={i}
            item={item}
            onCLick={onCLick}
          />
        );
      } else {
        return (
          <PortofolioCard
            key={i}
            item={item}
            onCLick={onCLick}
          />
        );
      }
    });
  } else if (query.trim() !== "") {
    return <IconNoSearch />;
  } else {
    return (
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-montserrat font-semibold text-center">
          Silahkan cari yang ingin anda cari
        </h2>
      </div>
    );
  }
};

// Komponen utama ModalSearch
const ModalSearch: React.FC<ModalSearchProps> = ({ isOpen, onCLick }) => {
  const { data_portofolio, data_paket } = useSelector(
    (state: any) => state.ui.data
  );

  const paket = [
    ...data_paket.more_paket.prewedding,
    ...data_paket.more_paket.wedding,
    ...data_paket.more_paket.engagement,
    ...data_paket.more_paket.add_on
  ].map((item) => ({ ...item, tipe: "paket" }));

  const portofolio = [...data_portofolio].map((item) => ({
    ...item,
    tipe: "portofolio"
  }));

  const combinedData = [...paket, ...portofolio];

  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [selectedSegment, setSelectedSegment] = useState<string>("semua");

  const handleInput = (ev: Event) => {
    const target = ev.target as HTMLIonSearchbarElement;
    const searchQuery = target?.value?.toLowerCase() || "";
    setQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filteredResults = combinedData.filter((item) => {
      return (
        (item.tipe === "paket" &&
          item.name.toLowerCase().includes(searchQuery)) ||
        (item.tipe === "portofolio" &&
          item.title.toLowerCase().includes(searchQuery))
      );
    });

    setResults(filteredResults);
  };

  const handleSegmentChange = (e: any) => {
    setSelectedSegment(e.target.value);
  };

  const getFilteredResults = () => {
    if (selectedSegment === "semua") {
      return results;
    } else {
      return results.filter((item) => item.tipe === selectedSegment);
    }
  };

  const filteredResults = getFilteredResults();

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onCLick}>
              <Icon
                icon={"bi:arrow-left"}
                width={30}
                height={30}
              />
            </IonButton>
          </IonButtons>
          <IonSearchbar
            searchIcon="undefined"
            className="ion-input-search"
            debounce={1000}
            value={query}
            onIonInput={(ev) => handleInput(ev)}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="pt-4">
          <IonSegment
            value={selectedSegment}
            onIonChange={handleSegmentChange}
            className="flex gap-4 justify-around items-center">
            <IonSegmentButton value="semua">
              <IonLabel className="text-lg capitalize font-montserrat font-semibold">
                Semua
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="paket">
              <IonLabel className="text-lg capitalize font-montserrat font-semibold">
                Paket
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="portofolio">
              <IonLabel className="text-lg capitalize font-montserrat font-semibold">
                Portofolio
              </IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <div className="h-[1.4px] w-full bg-dark my-4"></div>
          <div className="px-3">
            <SearchResult
              filteredResults={filteredResults}
              query={query}
              onCLick={onCLick}
            />
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ModalSearch;
