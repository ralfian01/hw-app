import { useEffect } from "react";
import { Redirect } from "react-router";

const SplashScreen = () => {
  // buat 2 detik maka di arahkan ke halaman utama
  useEffect(() => {
    setTimeout(() => {
      <Redirect to="/home" />;
    }, 3000);
  }, []);

  return (
    <div>
      <div>
        <img
          src="/assets/img/logo.png"
          alt="logo"
        />
        <h1 className="text-3xl font-alex-brush font-semibold">
          Capturing Moments
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
