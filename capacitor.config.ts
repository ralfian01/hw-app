import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capturing.app",
  appName: "Tulle Capture",
  webDir: "dist",
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      clientId: "569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com",
      serverClientId: "569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com",
      androidClientId: "569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    },
  }
};

export default config;

// 569116309326-cr4d2ppr8rjkjr41qapgc724uth402v9.apps.googleusercontent.com