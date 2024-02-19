import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homecrud from "./Components/Homecrud"
import Createuser from "./Components/Createuser"
import Users from "./Components/Users"
import Edituser from "./Components/Edituser"


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Homecrud />
                <Routes>
                    <Route element={<Createuser />} path="/" />
                    <Route element={<Users />} path="/user" />
                    <Route element={<Edituser />} path="/edit/:index"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
