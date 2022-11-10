import React from "react";

class Advert extends React.Component {
  render() {
    return(
      <section className="lg:flex lg:justify-between grid grid-cols-1 lg:pt-32 pt-10">
       <figure className="lg:w-3/6">
        <img src = "https://i.pinimg.com/564x/1f/04/be/1f04bea2f0f8d5aca5850cf34e15c219.jpg" alt="books with flowers on top"/>
       </figure>

       <figcaption className="lg:w-3/5 lg:pl-24 flex flex-col justify-center pl-8 text-justify">
        <h1 className="text-4xl font-bold mb-8 mt-8">Good Book Club</h1>
        <p className="lg:w-3/6 w-72 mb-10 text-sm">Good book is the Book Shop that has online workshops available for anyone who wants to put a sell their books and also get paid while writing a book.</p>
        <button className="bg-white shadow-xl w-48 text-lg h-14 rounded-md font-semibold hover:bg-red hover:text-white">Join</button>
       </figcaption>
      </section>
    )
}}
export default Advert;
