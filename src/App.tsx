import {Fragment} from "react"
import {Route, Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Navigation from "./components/Navigation"

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