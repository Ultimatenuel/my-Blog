import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import {auth} from "./firebase-config";

import './App.css';

function App() {
  
  const[isAuth,setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
    });
  };
  return (
   <Router>
    <nav>
      <Link to ="/"> Home </Link>
      <Link to ="/createpost"> CreatePost </Link>
      { !isAuth ? <Link to ="/Login"> Login </Link> : <button onClick={signUserOut}> Log out</button>}

    </nav>
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="createpost" element={<CreatePost />} />
        <Route path ="Login" element={<Login setIsAuth={setIsAuth} />} />

        

    </Routes>
   </Router>
  );
}

export default App;
