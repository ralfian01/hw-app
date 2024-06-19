import Banner from "@components/Fragments/Banner/Banner";
import Package from "@components/Fragments/Package/Package";
import { IonContent } from "@ionic/react";

interface CollectionLayoutsProps {
  refContent?: any;
}

/**
 * @param Params refContent
 * @returns React.FC CollectionLayouts {refContent : any}
 */

const CollectionLayouts: React.FC<CollectionLayoutsProps> = ({
  refContent
}: CollectionLayoutsProps) => {
  return (
    <IonContent
      ref={refContent}
      scrollEvents={true}>
      <Banner.Package
        banner="/assets/img/banner/banner-collection.jpeg"
        Bannername="Koleksi foto"
      />

      <Package.Collection />
    </IonContent>
  );
};

export default CollectionLayouts;
