import { BrowserRouter, Routes, Route } from "react-router-dom";

import Exemp3 from "./pages/Exemp3";
import Exemp2 from "./pages/Exemp2";
import Exemp from "./pages/Exemp";
import Error from "./pages/Error";
import RequireAuth from "./pages/RequireAuth";

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Exemp/>}/>
                <Route path="/exemp2" element={<Exemp2/>}/>
                <Route path="/exemp3/:slug" element={<Exemp3/>}/>
                <Route path="" element={<RequireAuth><Exemp/></RequireAuth>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;