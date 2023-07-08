import {Fragment} from "react"
import './App.css'
import {Route, Routes} from "react-router-dom"
import MainPage from "./Pages/MainPage"
import Navigation from "./Components/Navigation"

function App() {
    return (
        <Fragment>
            <Navigation />

            <Routes>
                <Route element={<MainPage />} path={'/'} />
            </Routes>
        </Fragment>
    )
}

export default App