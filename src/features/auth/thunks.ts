import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { authUserLogin, authUserLogout } from "@services/auth.services";
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk<any, any>(
  "auth/loginUser",
  async (
    dataLogin: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await authUserLogin(dataLogin);
      if (response.data.token) {
        const decodedToken: { username: string; name: string; noHp: string } =
          jwtDecode(response.data.token);
        const result = {
          token: response.data.token,
          username: decodedToken.username,
          name: decodedToken.name ? decodedToken.name : "-",
          noHp: decodedToken.noHp ? decodedToken.noHp : "-"
        };
        localStorage.setItem("authorization", JSON.stringify(result));
      }
      return response;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const logoutUser = createAsyncThunk<any, any>(
  "auth/logoutUser",
  async (token: string) => {
    try {
      const response = await authUserLogout(token);
      if (response.status === true) {
        localStorage.removeItem("token");
      }
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }
);

export const loginGoogle = createAsyncThunk("auth/loginGoogle", async () => {
  try {
    const response = await GoogleAuth.signIn();
    if (response) {
      const result = {
        token: response.authentication.idToken,
        username: response.email,
        name: response.name,
        noHp: "-"
      };
      localStorage.setItem("authorization", JSON.stringify(result));
    }
    return response;
  } catch (error: any) {
    return error;
  }
});

/**
 * Object
authentication
: 
{idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzYWJlNDEzYjIyNjhhZT…A_T0Gx4vg0WSdBMnBwramkhuPtXy45xjuc5N7_sr-We4If54w', accessToken: 'ya29.a0AXooCgviZ3Ybj9iqJBFhWq_qAeqBbuPZrsArCNlhW3y…4QaCgYKAdASARESFQHGX2Mi96Dlyy5LcodA_qcCDZeeTQ0170', expires: 1718656469, expires_in: 3157}
displayName
: 
"an_geom흡"
email
: 
"idrisanjounghan313@gmail.com"
givenName
: 
"an_geom흡"
id
: 
"117001010741504777991"
idToken
: 
"eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzYWJlNDEzYjIyNjhhZTk3NjQ1OGM4MmMxNTE3OTU0N2U5NzUyN2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NjkxMTYzMDkzMjYta2Z1N3FpNjBwM2g5NmlxZmMyOTUyNWFlMnVpMjcxMmcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NjkxMTYzMDkzMjYtY3I0ZDJwcHI4cmpranI0MXFhcGdjNzI0dXRoNDAydjkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcwMDEwMTA3NDE1MDQ3Nzc5OTEiLCJlbWFpbCI6ImlkcmlzYW5qb3VuZ2hhbjMxM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6ImFuX2dlb23tnaEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSzFjN3dfcmZOelJwem1mUHBIX0x1MjNFRDBVX1hOVGpWLUYydWx4TGJBTnctc1AzaXg9czk2LWMiLCJnaXZlbl9uYW1lIjoiYW5fZ2Vvbe2doSIsImlhdCI6MTcxODY1Mjg2OSwiZXhwIjoxNzE4NjU2NDY5fQ.MqhhzA6IScGmfvOr7TLOIDNReHPr0sHYWtMLL5Qk1sS2yrp1ruQKppmBcL84dmSrdodytXR5HWNuatDBy5OigrEXCLj_0g7f9lJ5id6CMfblM2pVCzr85XXy7BfdjWrJ2AN93vzX-qjaBAejCgNYuTNXvYlkxnHdqTI8AyywFCRPfqpe8SMHzCAz-kBNMGXv9G2Tset8r18qHECVaVCg8TrBGuAiKCwA2R8hH5RBCeaFxYLXTKX-5NfH7z357Jlla48Y41hIvtj2_eNbfSR_BM2njq8H6YwbBW5aIA_T0Gx4vg0WSdBMnBwramkhuPtXy45xjuc5N7_sr-We4If54w"
imageUrl
: 
"https://lh3.googleusercontent.com/a/ACg8ocK1c7w_rfNzRpzmfPpH_Lu23ED0U_XNTjV-F2ulxLbANw-sP3ix=s96-c"
name
: 
"an_geom흡"
serverAuthCode
: 
"4/0ATx3LY5bA-dfySt8bCyt5Rc4qFeokCyC0x2XAs7jx_ssAsxKgler4jnFV4uiOaNhLeYHfA"
 */
