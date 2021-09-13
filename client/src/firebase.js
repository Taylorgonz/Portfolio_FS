import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useContext, useState, useEffect, createContext } from 'react';
require('dotenv').config();

const FirebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

const AuthContext = createContext();


const AuthContextProvider = props => {
    const [user, setUser] =useState();
    const [error, setError] =useState();
    
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
        return () => unsubscribe()
    },[])

    return <AuthContext.Provider value={{ user, error}} {...props}/>
}

const useAuthState = () => {
    const auth = useContext(AuthContext)
    return {...auth, isAuthenticated: auth.user != null}
}

export { FirebaseApp, AuthContextProvider, AuthContext, useAuthState};



