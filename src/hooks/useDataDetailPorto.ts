import { useSelector } from "react-redux";

const useDataDetailPorto = (id: string) => {
  const { data_portofolio, koleksi_poto } = useSelector(
    (state: any) => state.ui.data
  );
	const data = data_portofolio.find((item: any) => item.id.toString() === id);
	return {
    data,
    koleksi: koleksi_poto
  };

};

export default useDataDetailPorto;
