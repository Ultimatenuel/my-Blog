import React from 'react';
import {auth,provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth"


function Login({setIsAuth}) {
    const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((result) => {
        localStorage.setItem("IsAuth" , true);
        setIsAuth(true);  
      });
   };

    return (
         <div className="loginPage">
            <p> sign in with google to continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
               sign in with google
            </button>
         </div>
    );
 }
export default Login;