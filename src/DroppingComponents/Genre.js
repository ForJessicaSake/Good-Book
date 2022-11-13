import React from "react";
import { IoMdHeadset } from "react-icons/io";
import { BsJournalBookmarkFill, BsArrowClockwise } from "react-icons/bs";

class Genre extends React.Component {
  render() {
    return (
      <section className="">
        <section className="grid lg:flex lg:justify-evenly lg:pl-24 lg:pr-24 place-items-center grid-cols-2 pl-2 text-sm">
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            Thriller
          </button>
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            Drama
          </button>
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            Detective
          </button>
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            Fantasy
          </button>
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            Books for Kids
          </button>
          <button className="bg-white shadow-xl w-36 text-md h-12 rounded-sm hover:bg-red hover:text-white mb-4">
            History
          </button>
        </section>

        <section className="lg:flex lg:justify-evenly grid grid-cols-1 mt-16 text-sm text-justify">
          <figure className="lg:w-56 flex flex-col items-center mb-8">
            <section className=" bg-yellow rounded-full h-20 w-20 flex items-center justify-center">
              <BsArrowClockwise className="text-6xl " />
            </section>
            <figcaption className="mt-4 w-64 lg:w-full">
              We deliver your book within 48 hours even on weekends. You can
              order upt to 15 books on the same package
            </figcaption>
          </figure>

          <figure className="lg:w-56 flex flex-col items-center mb-8">
            <section className=" bg-yellow rounded-full h-20 w-20 flex items-center justify-center">
              <BsJournalBookmarkFill className="text-5xl" />
            </section>
            <figcaption className="mt-4 w-64 lg:w-full">
              Are you a worm who frequently buys books from us? Join the club
              and get 15% of a discount for every book
            </figcaption>
          </figure>

          <figure className="lg:w-56 flex flex-col items-center">
            <section className=" bg-yellow rounded-full h-20 w-20 flex items-center justify-center">
              <IoMdHeadset className="text-5xl" />
            </section>
            <figcaption className="mt-4 w-64 lg:w-full">
              We have audio books too. Go to the section of audio and choose the
              best one.
            </figcaption>
          </figure>
        </section>
      </section>
    );
  }
}
export default Genre;
