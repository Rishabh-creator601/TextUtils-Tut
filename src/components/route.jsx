import { createBrowserRouter , createRoutesFromElements,Route} from "react-router-dom";
import MainForm from "./MainForm";
import Layout from "../Layout";
import Contacts from "./Contacts";



let router =  createBrowserRouter(
    createRoutesFromElements(
        <Route exact path="/textutils-react" element={<Layout />}>
            <Route path="" element={<MainForm />}/>
            <Route path="/contacts" element={<Contacts />} />

        </Route>
    ),{basename:"/textutils-react"}
)


export default router;