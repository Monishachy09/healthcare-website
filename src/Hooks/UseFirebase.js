import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import InitializationAuthentication from "../Pages/Login/Firebase/Firebase.init";


InitializationAuthentication();

const UseFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



       // SignIn with Google //

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup (auth, googleProvider) 
        .then(result => {
            setUser(result.user)
        }).catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }


// get the currently signed-in user 

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);

        }
        else{
            setUser({});
        };
        setIsLoading(false);
    });
    // setIsLoading(false);
    return () => unsubscribe;

}, [])




// SignOut


const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
        setUser({})

    }).catch(() => {
        setError(error.message)
    })
    .finally(() => setIsLoading(false));
}


return {
    user,
    isLoading,
    signInUsingGoogle,
    error,
    logOut
}
};

export default UseFirebase;