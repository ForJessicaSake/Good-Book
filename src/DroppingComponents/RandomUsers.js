import React, { Component } from "react";
import { BsArrowDown } from "react-icons/bs";
import Advert from "./Advert";
import Footer from "./Footer";

export default class RandomUsers extends Component {
  // definition of variables
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // check the response
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: "error", loading: true });
        }
      })
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error: error, loading: false }));
  }

  render() {

    // Using the Destructuring assignment, we define three variables used in the component
    const { users, loading, error } = this.state;

      // in case of error, component will display an error message
      if (error) {
        return (
          <h1 className="ml-8 text-sm mt-4 mb-4">
            Attention! There is a problem with the Web API. Kindly check your
            internet connection and try again soon.
          </h1>
        );
      }

    return (
      <main>
     <h1 className="text-center text-black text-xl mt-12 font-bold mb-6 lg:mb-10">Say Hi To Our Top Book Readers</h1>

        {loading ? (
          <section>
            <h2 className="flex items-center text-sm ml-10 mr-2 mb-6">
              Fetching our content writers
              <span className=" animate-bounce w-12 h-12 ml-6 flex justify-center items-center bg-white rounded-full shadow-xl">
                <BsArrowDown className="text-xl" />
              </span>
            </h2>
          </section>
        ) : (
          <section className="grid lg:grid-cols-3 grid-col-1 text-xs pr-2 ml-4 lg:ml-10 lg:text-sm cursor-pointer">
            {users &&
              users.map((userDetails) => (
                <article
                  key={userDetails.id}
                  className="w-full flex justify-between"
                >
                  <div className="animate-pulse bg-white shadow-xl w-full h-20 rounded-sm lg:ml-0 lg:w-72 lg:h-20 p-2 mb-4 mt-16 flex justify-center items-center hover:bg-red hover:text-white">
                    <div className=" flex flex-col spacing-80 spacing-x-px text-xs">
                      <h4 className="mb-2 font-semibold">
                        Name:{userDetails.name}
                      </h4>
                      <h4 className="mb-2">Email:{userDetails.email}</h4>
                      <h4 className="mb-2">
                        Address:{userDetails.address.city}
                      </h4>
                    </div>
                  </div>
                </article>
              ))}
          </section>
        )}
        <Footer/>
      </main>
    );
  }
}
