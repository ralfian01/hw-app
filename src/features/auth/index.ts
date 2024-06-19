import authReducer from "./authSlice";

/** Auth Thunk */
import { loginUser, loginGoogle } from "./thunks";

/**
 *  Product Action or ProducSelector
 */
import { authActions } from "./authSlice";

/** export redux Auth */
export { authReducer, authActions, loginUser, loginGoogle };
