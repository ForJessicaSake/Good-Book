import React from "react";
import {BsArrowDown} from 'react-icons/bs'


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
      return <h1 className="ml-8 text-sm">Attention! There is a problem with the Web API.</h1>;
    }

    return (
      <main className="lg:ml-8 ml-4 mb-20">
        {loading ? (
          <section>
          <h2 className="flex items-center text-sm">Fetching our content writers <span className=" animate-bounce w-12 h-12 ml-6 flex justify-center items-center bg-white rounded-full shadow-xl"><BsArrowDown className="text-xl"/></span></h2>
       
</section>
        ) : (
          <section className="grid lg:grid-cols-3 grid-cols-2 text-sm cursor-pointer">
            {authors && authors.map((authorDetails) => (
                  <article  key={authorDetails.id} className = "w-full ">
                  <div className="text-sm bg-white shadow-xl w-44  ml-2 lg:ml-0 lg:w-72 h-10 mb-4 mt-10 flex items-center justify-center hover:bg-red hover:text-white">
                    <h4 className="animate-bounce">{authorDetails.name}</h4>
                  </div>
              </article>
            ))}
          </section>
        )}
      </main>
    );
  }
}

class NewComponent extends React.Component {
  render() {
    return (
      <main className="">
        <section className="flex justify-between ml-8 pr-8 pt-20 items-center">
          <h1 className="lg:text-3xl text-lg font-bold">Good Book Authors</h1>
          <button className="bg-white shadow-xl w-32 lg:w-40 lg:text-lg text-md lg:h-16 h-12 rounded-md hover:bg-red hover:text-white">
            See All
          </button>
        </section>
      </main>
    );
  }
}
export default NewComponent;
