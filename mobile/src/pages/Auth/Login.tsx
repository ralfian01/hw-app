import { loginUser } from "@features/auth";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value
    });
  };

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser(dataLogin));
      if (response.payload.status === true) {
        return useHistory().push("/home");
      }
      if (response.payload.status === false && response.payload.errors) {
        setError({
          email: response.payload.data.email,
          password: response.payload.data.password
        });
      }
    } catch (error: any) {
      return error;
    }
  };

  const styles = {
    classNameInput: "input input-bordered input-primary w-full"
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-light">
      <div className="w-full max-w-md">
        <div className="card shrink-0 w-full shadow-2xl">
          <div className="card-body pb-0 mb-0 text-center">
            <div className="card-title text-2xl mx-auto">Login</div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card-body pb-0 mb-0 pt-1 mx-1">
            <div className="form-control">
              <label
                htmlFor="email"
                className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={dataLogin.email}
                onChange={handleChange}
                className={styles.classNameInput}
                placeholder="email"
                required
              />
              {error.email && <p className="text-red-500">{error.email[0]}</p>}
            </div>
            <div className="form-control">
              <label
                htmlFor="password"
                className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={dataLogin.password}
                placeholder="Password"
                className={styles.classNameInput}
                required
              />
              {error.password && (
                <p className="text-red-500">{error.password[0]}</p>
              )}
            </div>
            <div className="form-control">
              <div className="flex justify-start items-center ">
                <label className="cursor-pointer label flex justify-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success w-5 h-5"
                    required
                  />
                  <span className="label-text">I agree to</span>
                </label>
                <Link
                  to="/"
                  className="link link-primary text-sm p-0">
                  privacy policy & terms
                </Link>
              </div>
            </div>

            <div className="form-control">
              <button className="btn btn-primary font-bold text-base-100 text-lg">
                Login
              </button>
            </div>
            <div className="form-control">
              <label className="label flex justify-center gap-2">
                <span className="label-text">Don't have an account?</span>
                <Link
                  to="/register"
                  className="link link-info text-sm">
                  Sign up
                </Link>
              </label>
            </div>
          </form>
          <div className="divider divider-accent">OR</div>
          <div className="mb-5 text-center flex justify-center flex-row gap-4 ">
            <button
              className="shadow-[0_0_7px_1px__rgba(0,0,0,0.15)] p-2 gap-2 rounded-full bg-base-100 hover:bg-base-200 tooltip tooltip-bottom"
              data-tip="Continue With Google">
              <img
                src="/assets/img/googleIcon.svg"
                alt="google"
                className="w-6 h-6"
              />
            </button>
            <button
              className="shadow-[0_0_7px_1px__rgba(0,0,0,0.15)] p-2 gap-2 rounded-full bg-base-100 hover:bg-base-200 tooltip tooltip-bottom"
              data-tip="Continue With Facebook">
              <img
                draggable="false"
                src="/assets/img/facebookIcon.svg"
                alt="google"
                className="w-6 h-6"
              />
            </button>
            <button
              className="shadow-[0_0_7px_1px__rgba(0,0,0,0.15)] p-2 gap-2 rounded-full bg-dark hover:bg-slate-700 tooltip tooltip-bottom"
              data-tip="Continue With Github">
              <img
                src="/assets/img/githubIcon.svg"
                alt="google"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
