import { createBrowserRouter , createRoutesFromElements,Route} from "react-router-dom";
import MainForm from "./MainForm";
import Layout from "../Layout";
import Contacts from "./Contacts";



let router =  createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<MainForm />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>

        </Route>
    ),{basename:"/textutils-react"}
)


export default router;