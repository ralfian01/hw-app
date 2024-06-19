import { useState } from "react";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";

const useLoginGoogle = () => {
	const [googleAuthResult, setGoogleAuthResult] = useState(null);

	const loginWithGoogle = async () => {
		try {
			const result: any = await GoogleAuth.signIn();
			if (result && result.authentication) {
				setGoogleAuthResult(result);
			} else {
				console.log("Google authentication failed or cancelled");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		googleAuthResult,
		loginWithGoogle,
	};
};

export default useLoginGoogle;