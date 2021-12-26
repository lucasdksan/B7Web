import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exerc from "./pages/Exerc";
import Exemp3 from "./pages/Exemp3";
import Exemp from "./pages/Exemp";
import Home from "./pages/Home";

const UseRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/exerc" element={<Exerc/>} />
                <Route path="/exemp" element={<Exemp/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="exemp3" element={<Exemp3/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default UseRoutes;