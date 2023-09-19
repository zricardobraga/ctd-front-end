import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../components/Home.jsx"



export function RouteList(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}