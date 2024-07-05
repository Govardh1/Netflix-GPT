import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Body = () => {
  const dispatch=useDispatch()
  // const navigate=useNavigate()
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

   useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(addUser(uid))
      } else {
        dispatch(removeUser())
      }
    });
   },[dispatch])
  return (
    <div>
       <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body