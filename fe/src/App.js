import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Problems from "./pages/Problems";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import ProblemStatementView from "./pages/ProblemStatementView";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element= {<Home/> }/>
        <Route path="/login" element= {<Login/> }/>
        <Route path="/register" element= {<Register/> }/>
        <Route path="/problems" element= {<Problems/> }/>
        <Route path="/blogs" element= {<Blogs/> }/>
        <Route path="/profile" element= {<Profile/> }/>
        <Route path="/ranking" element= {<Ranking/> }/>
        <Route path="/problem_statement_view/:id" element = {<ProblemStatementView/>}/>
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
