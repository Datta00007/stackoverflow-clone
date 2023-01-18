import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    // console.log("Inside app.js useeffect")
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
