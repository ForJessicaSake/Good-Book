import React from "react";


export class GetListUsers extends React.Component {
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
      return <h1>Attention! There is a problem with the Web API.</h1>;
    }

    return (
      <main className="lg:ml-56 mb-20">
        {loading ? (
          <h2>Fetching our content writers...</h2>
        ) : (
          <section className="grid grid-cols-2 tet-sm cursor-pointer">
            {authors && authors.map((authorDetails) => (
                  <article  key={authorDetails.id} className = "w-full ">
                  <div className="text-sm bg-white shadow-xl w-44  ml-8 lg:ml-0 lg:w-72 h-10 mb-4 mt-10 flex items-center justify-center hover:bg-red hover:text-white">
                    <h4>{authorDetails.name}</h4>
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
        <section className="flex justify-between lg:pl-24 ml-8 pr-8 pt-20">
          <h1 className="text-3xl font-bold">Good Book Authors</h1>
          <button className="bg-white shadow-xl w-40 text-lg h-16 rounded-md hover:bg-yellow hover:text-white">
            See All
          </button>
        </section>
      </main>
    );
  }
}
export default NewComponent;
