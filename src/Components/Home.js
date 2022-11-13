import React from "react";
import Footer from "../DroppingComponents/Footer";
import Advert from "../DroppingComponents/Advert";
import SimpleSlider from "../DroppingComponents/SimpleSlider";
import NewComponent, {
  Authors,
  BestSellers,
} from "../DroppingComponents/Database";
import Header from "../DroppingComponents/Header";
import Genre from "../DroppingComponents/Genre";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <NewComponent />
        <Authors />
        <BestSellers />
        <SimpleSlider />
        <Genre />
        <Advert />
        <Footer />
      </main>
    );
  }
}

export default Home;
