import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowTabs } from "@features/ui/uiSlice";




const useToggleTabs = (showOnMount: boolean, showOnUnmount: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowTabs(showOnMount));
    return () => {
      dispatch(setShowTabs(showOnUnmount));
    };
  }, [dispatch, showOnMount, showOnUnmount]);
};

export default useToggleTabs;
