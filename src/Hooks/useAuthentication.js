import { useEffect, useState } from "react";

let auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authenticated, setAuthenticated] = useState('loading')
  
  function login() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth
      .signOut()
      .then(function() {
        //sign-out successful
      })
      .catch(function(err){
        //an error
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(user){
      if(user){
        setAuthenticated(user)
      } else{
        setAuthenticated()
      }
    }, function (err){
      console.log(err)
    })
  },[])

  return { login, logout, loggedIn: authenticated };
}
