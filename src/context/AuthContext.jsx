"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/auth/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "@/helpers/ToastNotify";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      //? Firebase-Methode zum Erstellen eines neuen Benutzers
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? Firebase-Methode zum Aktualisieren des Benutzerprofils
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      router.push("/login");
      toastSuccessNotify("Registered successfully!");
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
      // alert(err.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password

  //! Aktivieren anmeldung mit email/passwort
  const signIn = async (email, password) => {
    try {
      //? Firebase-Methode, die zum Anmelden des aktuellen Benutzers verwendet wird
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/profile");
      toastSuccessNotify("Logged in successfully!");
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
      // alert(err.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!");
  };

  const userObserver = () => {
    //? Firebase-Methode, die verfolgt, ob der Benutzer angemeldet ist oder nicht, und den neuen Benutzer als Antwort zurückgibt, wenn sich der Benutzer ändert
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        // User is signed out
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Aktivieren mit google-konto
  //* => Authentication => settings => Authorized domains => add domain
  //! Fügen Sie nach der Bereitstellung des Projekts den Bereitstellungslink zur Domänenliste hinzu, damit die Google-Anmeldung funktioniert.
  const signUpProvider = () => {
    //? Firebase-Methode zur Anmeldung bei Google-konto
    const provider = new GoogleAuthProvider();
    //? Firebase-Methode zur Anmeldung über ein Popup-Fenster
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        router.push("/profile");
        toastSuccessNotify("Logged in successfully!");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    //? Firebase-Methode zum Zurücksetzen des Passworts per E-Mail
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };
  const values = {
    currentUser,
    createUser,
    signIn,
    logOut,
    signUpProvider,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={values}>{children} </AuthContext.Provider>
  );
};

export default AuthContextProvider;
