import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase
const useFirebase =()=>{
    const [user, setUser]= useState({})

    return {
        user,
    }
}

export default useFirebase;