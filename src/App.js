import './App.css';
import Login from "./Components/Login/Login";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SignUp from "./Components/SignUp/SignUp";


/*
const router=createBrowserRouter([
    {
        path:"/signIn",
        element:<SignUp />,
        children:{
            index:true
        }
    }
])

 */
function App() {


  return (
    <div>

        <Router>

            <Routes>
                <Route index={true} path={"/"} element={<Login />} />
                <Route index={true} path={"/signUp"} element={<SignUp/>} />
                <Route index={true} path={"/signIn"} element={<Login/>} />
            </Routes>

        </Router>

    </div>
  );
}

export default App;
