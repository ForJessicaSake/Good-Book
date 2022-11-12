import React from 'react'
import TheseLiesOfGold from '../Images/These_Lies_Of_Gold.jpg'
import {GrPrevious} from 'react-icons/gr'

class Header extends React.Component {
  render() {
    return (
      <section className="lg:ml-10 ml-4 pt-8 lg:flex lg:justify-between grid grid-cols-1 ">
        <figcaption className='flex flex-col justify-center'>
          <h1 className="text-4xl font-extrabold lg:w-44 w-96 tracking-wide mb-8">
            Discover the world with new Book
          </h1>
          <p className="w-56 text-sm text-red">
            Refreshing your booklist by choosing your favourite genre
          </p>
          <button className="bg-red text-white shadow-xl w-48 lg:mb-0 mb-8 text-md h-14 rounded-md hover:bg-white hover:text-black mt-8">
            Shop for books
          </button>
        </figcaption>

        <p className=' mt-36 w-20 ml-48 text-red text-sm hidden lg:block'>1008 books in library</p>

        <figure className="py-6 w-96 bg-yellow lg:w-6/12 flex justify-center cursor-pointer lg:mt-0 ">
            <div className='flex justify-center items-center shadow-xl bg-white h-20 w-20 relative top-52 lg:right-16 right-6'>
            <GrPrevious className='text-3xl'/>
            </div>
          <figure>
            <div className="bg-red w-24 h-24 lg:h-36 lg:w-36 rounded-full mt-72 lg:mr-16 relative top-20"></div>
            <h1 className='lg:text-4xl text-3xl font-extrabold w-20 relative lg:left-20 left-10'>Best Sellers</h1>
          </figure>
          <figure>
            <img
              src={TheseLiesOfGold}
              alt="These lies are gold book cover "
              className="lg:w-56 lg:h-96 h-80 0bject-fit  mt-5 mr-4"
            />
          </figure>
        </figure>
      </section>
    )
  }
}
export default Header
