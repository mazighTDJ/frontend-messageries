import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import SignUp from "./Components/SignUp/SignUp";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";

function App() {


  return (
    <div>

        <Router>

            <Routes>
                
                <Route index={true} path={"/"} element={<Login />} />
                <Route index={true} path={"/signUp"} element={<SignUp/>} />
                <Route index={true} path={"/signIn"} element={<Login/>} />
                <Route index={true} path={"/home"} element={<Home />} />

            </Routes>

        </Router>

    </div>
  );
}

export default App;
