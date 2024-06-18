import { getInfoLogin } from "@services/auth.services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useLoginRedirect = (): boolean => {
  const loading = useSelector((state: any) => state.auth.loading);
  const [redirect, setRedirect] = useState(false);
  const { authorization} = getInfoLogin();

  useEffect(() => {
    if (!loading && authorization) {
      setRedirect(true);
    }
  }, [loading]);

  return redirect;
};
const useRegisterRedirect = (): boolean => {
  return false;
};

export default {
  useLoginRedirect,
  useRegisterRedirect
};
