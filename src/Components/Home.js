import React from "react";
import Footer from "../DroppingComponents/Footer";
import Advert from "../DroppingComponents/Advert";
import Shuffle from "../DroppingComponents/Shuffle";
import Swipe from "../DroppingComponents/Swiper";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Swipe/>
        <Shuffle />
        <Advert />
        <Footer />
      </main>
    );
  }
}

export default Home;
