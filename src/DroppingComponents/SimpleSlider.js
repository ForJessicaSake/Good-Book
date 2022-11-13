import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import littleWomen from '../Images/littlewomen.jpg'
import sevenHusbnd from '../Images/SevenHusband.jpg'
import TheGardenofLostSecrets from '../Images/TheGardenofLostSecrets.jpg'
import TheYearAfterYou from '../Images/TheYearAfterYou.jpg'
import WillaoftheWood from '../Images/WillaoftheWood.jpg'
import THEQUESTOFEWILAN from '../Images/THEQUESTOFEWILAN.jpg'
import TheNaughtSpectre from '../Images/TheNaughtSpectre.jpg'
import HarpersFall from '../Images/HarpersFall.png'
import LoveHypothesis from '../Images/LoveHypothesis.jpg'
import ThosewhoPrey from '../Images/ThosewhoPrey.png'



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1200,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
  <main className="lg:grid lg:grid-cols-2 mb-16">
    <section className="relative  bg-white shadow-2xl lg:w-4/6 flex items-center p-8">
      <img src = {TheYearAfterYou} alt = "The year after you book cover" className="pl-6"/>
    <button className="absolute bottom-1 lg:left-32 left-32 bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-yellow hover:text-white mb-4">Preview</button>
    </section>

        <Slider {...settings} className="h-full lg:mr-20 object-cover flex justify-between mt-14 lg:mt-32 ml-8">
        <div>
        <img src = {WillaoftheWood} alt='The Glass Woman book cover' className="object-fit lg:h-48 h-28"/>
          </div>
          <div>
            <img src = {TheNaughtSpectre} alt='The Glass Woman book cover' className="object-contain lg:h-48 h-28"/>
          </div>

          <div>
            <img src = {THEQUESTOFEWILAN} alt='The Glass Woman book cover' className="object-contain lg:h-48 h-28"/>
          </div>
          <div>

          <img src = {sevenHusbnd} alt='Seven Husband of Evlyn book cover' className="object-contain lg:h-48 h-28 ml-2"/>
          </div>
      
          <div>
          <img src = {littleWomen} alt='Little women book cover' className="object-contain lg:h-48 h-28"/>
          </div>
          <div>
          <img src = {TheGardenofLostSecrets} alt='Harpers Fall book cover' className="object-contain lg:h-48 h-28"/>
          </div>
          <div>
          <img src = {LoveHypothesis} alt='Love Hypothesis book cover' className="object-contain lg:h-48 h-28"/>
          </div>
          <div>
          <img src = {HarpersFall} alt='Harpers Fall book cover' className="object-contain lg:h-48 h-28 ml-4"/>
          </div> 
           <div>
          <img src = {ThosewhoPrey} alt='Those who prey book cover' className="object-contain lg:h-48 h-28"/>
          </div>
        </Slider>
        
      </main>
    );
  }
}