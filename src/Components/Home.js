import React from "react";
import Footer from "../DroppingComponents/Footer";
import Advert from "../DroppingComponents/Advert";
import Shuffle from "../DroppingComponents/Shuffle";
import SimpleSlider from "../DroppingComponents/SimpleSlider";
import NewComponent, { Authors } from "../DroppingComponents/Database";
import Header from "../DroppingComponents/Header";


class Home extends React.Component {
  render() {
    return (
      <main>
        <Header/>
        <NewComponent/>
        <Authors/>
        <SimpleSlider/>
        <Shuffle />
        <Advert />
        <Footer />
      </main>
    );
  }
}

export default Home;
