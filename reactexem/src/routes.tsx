import { BrowserRouter, Routes, Route } from "react-router-dom";

import Exemp3 from "./pages/Exemp3";
import Exemp2 from "./pages/Exemp2";
import Exemp from "./pages/Exemp";
import Error from "./pages/Error";
import RequireAuth from "./pages/RequireAuth";
import SignUp from "./pages/SignUp";
import ShowData from "./pages/ShowData";
import { ContextProvider } from "./contexts/Context";
import Exemp5 from "./pages/Exemp5";

const RoutesApp = ()=>{
    return(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Exemp/>}/>
                    <Route path="/exemp2" element={<Exemp2/>}/>
                    <Route path="/exemp3/:slug" element={<Exemp3/>}/>
                    <Route path="/exemp4" element={<RequireAuth><Exemp/></RequireAuth>}/>
                    <Route path="/exemp5" element={<Exemp5/>}/>
                    <Route path="/sign-in" element={<SignUp/>}/>
                    <Route path="/showdata" element={<ShowData/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default RoutesApp;