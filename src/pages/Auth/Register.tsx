import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const styles = {
    classNameInput: "input input-bordered input-accent w-full"
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-base-300">
      <div className="w-full max-w-md">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body pb-0 mb-0 text-center">
            <div className="card-title text-2xl mx-auto">Register</div>
          </div>
          <form
            className="card-body pb-0 mb-0 pt-1"
            action="post">
            <div className="form-control">
              <label
                htmlFor="email"
                className="label">
                Email
              </label>
              <input
                type="text"
                placeholder="email"
                className={styles.classNameInput}
                required
              />
            </div>
            <div className="form-control">
              <div className="flex justify-start items-center ">
                <label className="cursor-pointer label flex justify-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent w-4 h-4"
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
              <button className="btn btn-accent font-bold text-base-100 text-lg">
                Continue
              </button>
            </div>
            <div className="form-control">
              <label className="label flex justify-center gap-2">
                <span className="label-text">Already have an account?</span>
                <Link
                  to="/login"
                  className="link link-info text-sm">
                  Sign in instead
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
              className="shadow-[0_0_7px_1px__rgba(0,0,0,0.15)] p-2 gap-2 rounded-full  bg-base-content  hover:bg-slate-700 tooltip tooltip-bottom"
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

export default Register;
