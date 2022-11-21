import React, { Component } from "react";
import { BsArrowDown } from "react-icons/bs";

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

    return (
      <main>
        {loading ? (
          <section>
            <h2 className="flex items-center text-sm ml-2 lg:ml-8 mr-2">
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
      </main>
    );
  }
}
