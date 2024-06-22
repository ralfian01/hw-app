// import FORM COMPONETE REACT cstm
import FormAuth from "@components/Fragments/Form/FormAuth";

// interface props
interface AuthLayoutsProps {
  login: boolean;
}
/**
 * @param props AuthLayoutsProps
 * @returns React.FC:AuthLayouts {login : boolean}
 */
const AuthLayouts: React.FC<AuthLayoutsProps> = (props: AuthLayoutsProps) => {
  const { login } = props;
  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center px-3">
      <div
        className={` h-full absolute top-0 w-full -z-10 bg-cover blur-3xl`}
        style={{
          backgroundImage: `url(${
            login
              ? "/assets/img/banner/banner-home.png"
              : "/assets/img/banner/banner-collection.jpeg"
          })`
        }}></div>

      {login ? <FormAuth /> : <FormAuth auth="register" />}
    </div>
  );
};

export default AuthLayouts;
