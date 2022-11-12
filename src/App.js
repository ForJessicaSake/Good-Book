import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Community from "./Components/Community";
import Home from "./Components/Home";
import Nav from "./DroppingComponents/Nav";

class App extends React.Component {
  render() {
    return(
      <section className="font-font overflow-x-hidden max-w-9xl">
        <Router>
        <Nav/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/community" element = {<Community/>}/>
          </Routes>
        </Router>
      </section>
    )
}}
export default App;
