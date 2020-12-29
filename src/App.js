import React, { Component } from "react";
import Account from "./Account";

class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          isLoading: false,
        })
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <>
        <h1>title</h1>
        <p>First paragraph</p>
        <h2>Welcome to React Testing</h2>;
        <button type="button" id="my-button-two"></button>
        <button type="button" id="my-button-three"></button>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map((user) => {
            return <Account key={user.username} user={user}/>;
          })
        ) : (
          <h3>Fetching Users...</h3>
        )}
      </>
    );
  }
}

export default App;
