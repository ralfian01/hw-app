import { useSelector } from "react-redux";

const useDataDetailPaket = (slug: string) => {
  const { prewedding, wedding, engagement, add_on } = useSelector(
    (state: any) => state.ui.data.data_paket.more_paket
  );

  const allPackages = [prewedding, wedding, engagement, add_on].reduce(
    (acc, current) => acc.concat(current),
    []
  );
  const findDataByName = (name: string) => {
    const lowerCaseName = name.toLowerCase();
    const found = allPackages.find(
      (item: any) => item?.name?.toLowerCase() === lowerCaseName
    );
    return found;
  };
  const data = findDataByName(slug);

  return data;
};

export default useDataDetailPaket;
