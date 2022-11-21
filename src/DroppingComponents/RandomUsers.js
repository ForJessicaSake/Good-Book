import React, { Component } from "react";
import { BsArrowDown } from "react-icons/bs";
import Footer from "./Footer";

export default class RandomUsers extends Component {
  // definition of variables
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      // check the response
      .then((response) => response.json())
      .then((response)=>{
        this.setState({
            users:response.results,
            loading:false
        })
      })
  }


  render() {

    // Using the Destructuring assignment, we define three variables used in the component
    let { users, loading } = this.state;


    return (
      <main>
     <h1 className="text-center text-black text-xl mt-12 font-bold mb-6 lg:mb-10">Say Hi To Our Top Book Readers</h1>

        {loading ? (
          <section>
            <h2 className="text-sm mb-6  text-center">
              Fetching our content writers
            </h2>
          </section>
        ) : (
          <section className="">
            {users && users.map((user) => (
                <article
                  key={user.id}
                  className="flex justify-center items-center"
                >
                  <div className="w-screen flex flex-col justify-center items-center">
                    <div className="">
                     <img src={user.picture.medium} alt="user" className="w-40 mb-6"/>
                      <h4 className="mb-4 font-semibold">
                        First Name: {user.name.first}
                      </h4>
                      <h4 className="font-semibold mb-6">
                        Last Name: {user.name.last}
                      </h4>                      
                    </div>
                    <button className=' bg-yellow text-white shadow-xl w-32 lg:w-40 lg:text-lg text-md lg:h-12 h-12 rounded-md hover:bg-red hover:text-white hidden lg:block' onClick={() => window.location.reload(true)}>Say Hi</button>
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
