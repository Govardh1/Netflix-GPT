import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Body = () => {
  const dispath=useDispatch()
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

    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayname} = user.uid;
       dispath(addUser({uid,email,displayname}))
      } else {
        
      }
    });
  return (
    <div>
       <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body