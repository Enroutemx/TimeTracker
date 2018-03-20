import { AsyncStorage } from "react-native";

export const IS_SIGNED_IN = "is-signed-in";

export const onSignIn = () => AsyncStorage.setItem(IS_SIGNED_IN, "true");

export const onSignOut = () => AsyncStorage.removeItem(IS_SIGNED_IN);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(IS_SIGNED_IN)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};