import React from "react";
import Footer from "../DroppingComponents/Footer";
import Advert from "../DroppingComponents/Advert";
import Shuffle from "../DroppingComponents/Shuffle";
import SimpleSlider from "../DroppingComponents/SimpleSlider";
import NewComponent, { GetListUsers } from "../DroppingComponents/New";
import Header from "../DroppingComponents/Header";


class Home extends React.Component {
  render() {
    return (
      <main>
        <Header/>
        <NewComponent/>
        <GetListUsers/>
        <SimpleSlider/>
        <Shuffle />
        <Advert />
        <Footer />
      </main>
    );
  }
}

export default Home;
