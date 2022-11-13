import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

export class Authors extends React.Component {
  // definition of variables
  constructor() {
    super();
    this.state = {
      authors: [],
      loading: true,
      error: null,
    };
  }

  // definition of componentDidMount method
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
      .then((data) => this.setState({ authors: data, loading: false }))
      .catch((error) => this.setState({ error: error, loading: false }));
  }

  render() {
    // Using the Destructuring assignment, we define three variables used in the component
    const { authors, loading, error } = this.state;

    // in case of error, component will display an error message
    if (error) {
      return (
        <h1 className="ml-8 text-sm mt-4 mb-4">
          Attention! There is a problem with the Web API. Kindly check your
          internet connection and try again soon.
        </h1>
      );
    }

    const handleDelete = (id) => {
      const newAuthors = authors.filter((author) => {
        return author.id !== id;
      });
      this.setState({ authors: newAuthors });
    };

    return (
      <main className="lg:ml-8 ml-4 mb-20">
        {loading ? (
          <section>
            <h2 className="flex items-center text-sm ml-4">
              Fetching our content writers
              <span className=" animate-bounce w-12 h-12 ml-6 flex justify-center items-center bg-white rounded-full shadow-xl">
                <BsArrowDown className="text-xl" />
              </span>
            </h2>
          </section>
        ) : (
          <section className="grid lg:grid-cols-3 grid-col-1 text-xs pr-2  lg:text-sm cursor-pointer">
            {authors &&
              authors.map((authorDetails) => (
                <article
                  key={authorDetails.id}
                  className="w-full flex justify-between "
                >
                  <div className="animate-pulse bg-white shadow-xl w-full h-20 rounded-sm lg:ml-0 lg:w-72 lg:h-20 p-2 mb-4 mt-16 flex justify-between items-center">
                    <div className=" flex flex-col items-center justify-center ml-2">
                      <h4 className="mb-2">{authorDetails.name}</h4>
                      <p className="">
                        <span className="font-bold">Title: </span>
                        {authorDetails.company.bs}
                      </p>
                    </div>

                    <figure className="">
                      <AiOutlineDelete
                        onClick={() => handleDelete(authorDetails.id)}
                      />
                    </figure>
                  </div>
                </article>
              ))}
          </section>
        )}
      </main>
    );
  }
}

export class BestSellers extends React.Component {
  render() {
    return (
      <section className=" flex justify-end text-black mb-14">
        <hgroup className="w-wtt text-4xl font-bold h-32 bg-yellow flex flex-col justify-center pl-6  rounded-l-sm">
          <h1>Best</h1>
          <h1>Sellers</h1>
        </hgroup>
      </section>
    );
  }
}

class NewComponent extends React.Component {
  render() {
    return (
      <main className="">
        <section className="flex justify-between ml-8 pr-8 pt-20 items-center">
          <div className="">
            <h1 className="lg:text-3xl text-2xl font-bold">
              Good Book Authors Community
            </h1>
            <p className="lg:w-2/4 w-full lg:text-sm text-sm mt-6 leading-relaxed tracking-wide">
              Here are the top books that our content writers have submitted in
              the past week. Simply filter out the other books below until only
              your favorite remains to help us decide which book to sponsor.
            </p>
          </div>

          <button className="bg-white shadow-xl w-32 lg:w-40 lg:text-lg text-md lg:h-16 h-12 rounded-md hover:bg-red hover:text-white hidden lg:block">
            Vote
          </button>
        </section>
      </main>
    );
  }
}
export default NewComponent;
