import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const [dark,setDark] = useState(false)

const [name,setName] = useState('')


const goToTop = ()=>{
    window.scrollTo(0,0)
}




document.querySelector("html").setAttribute("data-theme", `${dark ? "dark" : "light"}`); 
document.querySelector("html").className = `${dark ? "dark" : "light"}`


const register = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,facebookProvider)
}
const logout = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])
    const info = {
      goToTop,
   
      name,
      setName,
    
      user,
      dark,
      setDark,
      loading,
      register,
      login,
      googleLogin,
      facebookLogin,
      logout,
      setLoading
    };


    return (
       <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;