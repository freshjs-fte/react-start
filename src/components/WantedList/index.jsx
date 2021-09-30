import React, { Component } from "react";
import { getRandomUser } from "../../api";

class WantedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.load();
    }
  }

  load = () => {
    getRandomUser({
      results: 5,
      seed: "wanted",
      page: this.state.page,
      nat: ["us", "fr"],
    })
    .then((data) => {
      console.log(data);
      const wanted = data.results;

      this.setState({
        list: wanted,
      });
    });
  };

  nextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  prevPage = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.prevPage}>Prev page</button>
        <button onClick={this.nextPage}>Next page</button>
        <ul>
          {this.state.list.map((elem, index) => {
            return (
              <li key={elem.login.uuid}>
                {elem.name.first} {elem.name.last}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

/* 
    set state queue
    initial state = {test: 1}

    1. setState( {test: ...} )
    {test: this.state+1}, {test: this.state+1 }
    result state = {test: 2}

    2. setState( (prevState) => { return {test: prevState...} } )
    (prevState) => {test: prevState+1}, (prevState) => {test: prevState+1 }
    result state = {test: 3}

    
*/

export default WantedList;
