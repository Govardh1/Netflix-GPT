import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from '../utils/userSlice' 
import { auth } from '../utils/fireBase'
import { toggelGptSearch, toggelGptSearchView } from "../utils/GptSlice";

export const Header = () => {
  const dispatch =useDispatch()
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch (addUser(uid))
        navigate("/browse")
      } else {
        dispatch (removeUser())
        navigate("/")
      }
    });
   },[dispatch])


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  };

  if (!user) {
    return null; // Don't render the header if the user is not logged in
  }

 function handelGptSearch(){
  dispatch(toggelGptSearch())
  }
  return (

    <div className="absolute w-full px-8 py-2 bg-gradient-to-b z-40 from-black  flex justify-between">
        
        <img 
         className="w-44 bg-opacity-50"
         src="https://th.bing.com/th?id=OIP.AK6U_jX96M3WhF4sVwmVrgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="logo" />
        <div>
        <button className="py-2 px-4 m-2 bg-purple-400 rounded-lg text-white"
        onClick={handelGptSearch}
        >GPT search</button>
         <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 m-7 border-gray-700 hover:border-gray-500 rounded">
          signOut</button>

        </div>
    </div>
  )
}
export default Header;