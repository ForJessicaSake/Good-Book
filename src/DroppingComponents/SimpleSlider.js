import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import littleWomen from '../Images/littlewomen.jpg'
import sevenHusbnd from '../Images/SevenHusband.jpg'
import HarpersFall from '../Images/HarpersFall.png'
import TheGardenofLostSecrets from '../Images/TheGardenofLostSecrets.jpg'
import TheYearAfterYou from '../Images/TheYearAfterYou.jpg'
import WillaoftheWood from '../Images/WillaoftheWood.jpg'
import THEQUESTOFEWILAN from '../Images/THEQUESTOFEWILAN.jpg'
import TheNaughtSpectre from '../Images/TheNaughtSpectre.jpg'




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ffcd45" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ffcd45"}}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (
  <main className="grid grid-cols-2 gap-0 mb-16">
    <section className="relative  bg-white shadow-2xl w-4/6 flex items-center p-8">
      <img src = {TheYearAfterYou} alt = "black girl wanted book cover" className="pl-6"/>
    <button className="absolute bottom-1 left-32 bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-yellow hover:text-white mb-4">Preview</button>
    </section>
        <Slider {...settings} className="h-full w-full object-cover flex justify-between">
        <div>
        <img src = {WillaoftheWood} alt='The Glass Woman book cover' className="object-fit h-96"/>
          </div>
          
          <div>
            <img src = {TheNaughtSpectre} alt='The Glass Woman book cover' className="object-contain h-96"/>
          </div>

          <div>
            <img src = {THEQUESTOFEWILAN} alt='The Glass Woman book cover' className="object-contain h-96"/>
          </div>
          <div>

          <img src = {sevenHusbnd} alt='Seven Husband of Evlyn book cover' className="object-contain h-96"/>
          </div>
      
          <div>
          <img src = {littleWomen} alt='Little women book cover' className="object-contain h-96"/>
          </div>
          <div>
          <img src = {TheGardenofLostSecrets} alt='Harpers Fall book cover' className="object-contain h-96"/>
          </div>
        </Slider>
        
      </main>
    );
  }
}