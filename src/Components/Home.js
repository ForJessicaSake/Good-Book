import React from "react";
import Footer from "../DroppingComponents/Footer";
import Advert from "../DroppingComponents/Advert";
import Shuffle from "../DroppingComponents/Shuffle";
import SimpleSlider from "../DroppingComponents/SimpleSlider";


class Home extends React.Component {
  render() {
    return (
      <main>
        <SimpleSlider/>
        <Shuffle />
        <Advert />
        <Footer />
      </main>
    );
  }
}

export default Home;
