import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

// package hooks Form Validation
import { SubmitHandler, useForm } from "react-hook-form";

// component
import { Icon } from "@iconify/react";
import { IonButton, IonTextarea } from "@ionic/react";
import Input from "@components/Elements/Input/Input";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { loginGoogle, loginUser } from "@features/auth";

// hooks
import useAuthRedirect from "@hooks/useAuthRedirect";

type FormInputs = {
  authType: "login" | "register";
  username: string;
  password: string;
} & (
  | {
      authType: "login";
      nama?: never;
      email?: never;
      telepon?: never;
      alamat?: never;
    }
  | {
      authType: "register";
      nama: string;
      email: string;
      telepon: string;
      alamat: string;
    }
);
interface FormAuthProps {
  auth?: "login" | "register";
}

const FormAuth: React.FC<FormAuthProps> = ({ auth = "login" }) => {
  // Validator formAuth
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    trigger,
    setValue
  } = useForm<FormInputs>();

  // redux state in auth
  const loading = useSelector((state: any) => state.auth.loading);
  const error = useSelector((state: any) => state.auth.error);

  // dispatch
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    setValue("authType", auth);
  }, [auth, setValue]);

  // submit
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (data.authType === "login") {
      dispatch(loginUser(data));
    } else {
      // dispatch(registerUser(data));
    }
  };

  // redirect hooks waiting loading
  if (useAuthRedirect.useLoginRedirect()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="text-center pb-5 flex flex-col justify-center items-center">
        <img
          src="/assets/icons/logo.png"
          alt="Logo"
        />
        <h1 className="text-3xl font-montserrat font-bold text-primary underline">
          {auth === "login" ? "Login" : "Register"}
        </h1>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}>
        {auth === "login" ? (
          <Login
            register={register}
            errors={errors}
            clear={clearErrors}
            trigger={trigger}
          />
        ) : (
          <Register
            register={register}
            errors={errors}
          />
        )}
      </form>
      <dialog
        id="modal"
        className="modal backdrop-blur-xl"
        open={loading}>
        <h3 className="loading loading-dots loading-lg text-primary"></h3>
      </dialog>
      <dialog
        id="my_modal_2"
        className="modal backdrop-blur-xl"
        open={error}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            <Icon
              icon="bi:exclamation-triangle-fill"
              width={60}
              height={60}
              color="orange"
              className="mx-auto"
            />
          </h3>
          <p className="text-center font-montserrat font-semibold text-lg text-red-500">
            Username atau Password yang anda masukkan tidak sesuai
          </p>
        </div>
        <form
          method="dialog"
          className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

// login Components
interface LoginProps {
  register: ReturnType<typeof useForm<FormInputs>>["register"];
  errors: ReturnType<typeof useForm<FormInputs>>["formState"]["errors"];
  clear: ReturnType<typeof useForm<FormInputs>>["clearErrors"];
  trigger: ReturnType<typeof useForm<FormInputs>>["trigger"];
}
const Login: React.FC<LoginProps> = ({ register, errors, clear, trigger }) => {
  const validate = {
    username: {
      ...register("username", {
        required: "Harap isi email anda",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Format email tidak valid"
        },
        onChange: async (e) => {
          const isValid = await trigger("username");
          if (isValid) {
            clear("username");
          }
        }
      })
    },
    password: {
      ...register("password", {
        required: "Harap isi password anda"
      })
    }
  };

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const loginWithGoogle  = () => {
    dispatch(loginGoogle());
  }

  return (
    <>
      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="email">Email</label>
        <Input
          placeholder="jhontoer@example.com"
          {...validate.username}
          className={`h-[3.5rem] input-primary ${
            errors.username && "input-error"
          }`}
        />
        {errors.username && (
          <p className="text-error capitalize font-montserrat text-sm py-2">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="*************"
          icon="bi:eye"
          {...validate.password}
          className={`h-[3.5rem] input-primary ${
            errors.password && "input-error"
          }`}
        />
        {errors.password && (
          <p className="text-error capitalize font-montserrat text-sm py-2">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="divider divider-primary">ATAU</div>
      <IonButton
        expand="block"
        onClick={loginWithGoogle}
        style={{ "--background": "var(--gray)" }}>
        <div className="flex items-center w-full">
          <Icon
            icon="flat-color-icons:google"
            width={40}
            height={40}
          />
          <span className="ml-2 font-montserrat capitalize text-lg text-dark">
            Continue With Google
          </span>
        </div>
      </IonButton>
      <div className="flex justify-between gap-2 items-center">
        <p className="font-montserrat font-semibold text-info mix-blend-multiply drop-shadow-[0_0_10px_var(--light)]">
          Lupa Password
        </p>
      </div>
      <IonButton
        expand="block"
        size="large"
        type="submit">
        <span className="font-montserrat font-semibold text-lg">Login</span>
      </IonButton>
      <div className="w-full text-center">
        <Link
          to="/register"
          className="font-montserrat font-semibold text-lg text-center text-info mix-blend-multiply drop-shadow-[0_0_10px_var(--light)]">
          Belum punya akun?
        </Link>
      </div>
    </>
  );
};

// Register Components
interface RegisterProps {
  register: ReturnType<typeof useForm<FormInputs>>["register"];
  errors: ReturnType<typeof useForm<FormInputs>>["formState"]["errors"];
}

const Register: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="nama">Nama Lengkap</label>
        <Input
          type="teks"
          placeholder="jhontoer lodon"
          name="nama"
          className="h-[3.5rem] input-primary"
          icon={"false"}
        />
        {errors.nama && (
          <p className="text-error capitalize font-montserrat text-sm py-2">
            {errors.nama.message}
          </p>
        )}
      </div>
      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          placeholder="jhontoer@example.com"
          name="email"
          className="h-[3.5rem] input-primary"
        />
      </div>

      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="password">Passsword</label>
        <Input
          type="password"
          placeholder="*************"
          icon="bi:eye"
          name="password"
          className="h-[3.5rem] input-primary"
        />
      </div>
      <div className="font-montserrat font-semibold text-dark">
        <label htmlFor="telepon">No Telepon</label>
        <Input
          type="teks"
          placeholder="+621243456789"
          icon="bi:telephone"
          name="password"
          className="h-[3.5rem] input-primary"
        />
      </div>
      <IonButton
        expand="block"
        size="large"
        type="submit">
        <span className="font-montserrat font-semibold text-lg">Register</span>
      </IonButton>
      <div className="w-full text-center">
        <IonButton
          fill="clear"
          onClick={() => history.back()}
          className="font-montserrat capitalize font-semibold text-lg text-center text-info mix-blend-color-dodge drop-shadow-[0_0_10px_var(--light)]">
          Sudah punya akun?
        </IonButton>
      </div>
    </>
  );
};

export default FormAuth;
