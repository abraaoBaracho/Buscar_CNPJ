import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./paginas/index";
import Login from "./paginas/login";
import Cadastro from "./paginas/cadastro";

function AppRotas(){

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Index />}></Route>
            <Route path="/login" element = {<Login />}></Route>
            <Route path="/cadastro" element = {<Cadastro />}></Route>
        </Routes>
    </BrowserRouter>
    )
}
export default AppRotas;