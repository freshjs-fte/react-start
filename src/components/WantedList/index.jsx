import React, { Component } from "react";

class WantedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5" /*?seed=wanted&"*/)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log(data);
        const wanted = data.results;

        this.setState({
          list: wanted,
        });
      });
  }

  render() {
    return (
      <div>
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

export default WantedList;
