import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-10">
        <hr></hr>

        <section className=" grid grid-cols-2 pl-10 lg:grid-cols-5 lg:pr-32 lg:pl-32 mt-4 text-sm">
          <nav className=" pt-8">
            <h1 className="text-xl font-semibold mb-6">About</h1>
            <ul className="tracking-wider leading-8">
              <li>Goodbook</li>
              <li>Sitemap</li>
              <li>Library</li>
              <li>Bookmarks</li>
            </ul>
          </nav>

          <nav className=" pt-8">
            <h1 className="text-xl font-semibold  mb-6">For Clients</h1>
            <ul className="tracking-wider leading-8">
              <li>Payment Methods</li>
              <li>Delivery terms</li>
              <li>Returns</li>
              <li>Search</li>
            </ul>
          </nav>

          <nav className=" pt-12 lg:pt-8">
            <h1 className="text-xl font-semibold  mb-6">Club</h1>
            <ul className="tracking-wider leading-8">
              <li>Join</li>
              <li>Club Benefits</li>
              <li>Forum</li>
              <li>Partners</li>
            </ul>
          </nav>

          <nav className=" pt-12 lg:pt-8">
            <h1 className="text-xl font-semibold mb-6">Help</h1>
            <ul className="tracking-wider leading-8">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Authors</li>
            </ul>
          </nav>

          <nav className=" pt-12  lg:pt-8">
            <h1 className="text-xl font-semibold mb-6">
              <span className="text-red">News</span>letters
            </h1>
            <p className="mt-4 mb-6 w-64 text-sm">
              Learn about new offers and get more details by joining our news
              letter
            </p>
            <button className="bg-red text-md text-white w-36 h-10 border-0 rounded-md mb-4 hover:bg-white hover:text-black hover:shadow-xl">
              Subscribe
            </button>
            <ul className="tracking-wider leading-8 flex justify-between w-36 text-2xl">
              <li>
                <BsFacebook />
              </li>
              <li>
                <AiFillTwitterCircle />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillYoutube />
              </li>
            </ul>
          </nav>
        </section>
        <p className="text-center mt-6 mb-4 ">
          2021@all reserved by <span className="text-red"> Firecut</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
