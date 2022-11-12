import React from "react";
import Home from "./Components/Home";
import Nav from "./DroppingComponents/Nav";

class App extends React.Component {
  render() {
    return(
      <section className="font-font overflow-x-hidden">
      <Nav/>
      <Home/>
      </section>
    )
}}
export default App;
