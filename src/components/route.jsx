import { createBrowserRouter } from "react-router-dom";
import MainForm from "./MainForm";
import Layout from "../Layout";
import Contacts from "./Contacts";
import { Children } from "react";


let router =  createBrowserRouter([
    {
        path:"/",
        element:<Layout />,

    
   children: [

    {
        path:"",
        element:<MainForm />
    },
    {
        path:"/contacts",
        element:<Contacts />
    }

   ]

}
])


export default router;