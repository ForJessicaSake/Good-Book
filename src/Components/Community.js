import React from "react";
import Genre from "../DroppingComponents/Genre";
import humprey from "../Images/humphrey.jpg";
import Advert from "../DroppingComponents/Advert";
import Footer from "../DroppingComponents/Footer";

class Community extends React.Component {
render(){
    return (
      <main className="">
        <section className="lg:flex lg:justify-between lg:items-center lg:ml-8 ml-2">
          <hgroup className=" lg:w-2/4">
            <h1 className="lg:text-8xl text-5xl font-bold mt-2 lg:mt-0 mb-8">Join Us. </h1>
            <p className="lg:w-3/4 text-md w-80 mb-8 lg:mb-0">
              We are on a mission to give every human fair access to book
              collections and the social connectedness and support to build a
              strong book community in the future. We pay for everything, fill the form below and get an email from us in two buisness days
            </p>
            <form className="">
            <div className="lg:flex items-center hidden mt-8">
              <input
                className="border-2 w-72 h-8 border-black shadow-xl rounded-sm"
                placeholder="Enter your name"
              ></input>
              </div>
              <div className="lg:flex items-center hidden mt-8">
              <input
                className="border-2 w-72 h-8 border-black shadow-x rounded-sml"
                placeholder="Enter your email"
              ></input>
              </div>
              <div className="lg:flex items-center hidden mt-8">
              <input
                className="border-2 w-72 h-8 border-black shadow-x rounded-sml"
                placeholder="Enter your book title"
              ></input>

              <button className="w-20 h-8 text-sm bg-black text-white flex items-center justify-center">
Submit              </button>
            </div>
            </form>
          </hgroup>
          <img src={humprey} alt="" className=" w-96" />
        </section>
        <section className="mt-14">
          <Genre />
        </section>

        <section className="mt-14">
          <Advert/>
        </section>

        <section className="mt-14">
          <Footer/>
        </section>
      </main>
    );
  }
}
export default Community;
