import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignedUp from "./components/SignedUp";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Logout from './components/Logout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/signedup" element={<SignedUp />} />
                <Route exact path="/signedout" element={<Logout />} />
                <Route exact path="/" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
