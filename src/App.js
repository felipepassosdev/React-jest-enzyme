import axios from "axios";
import React, { useEffect, useState } from "react";
import Account from "./Account";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = () =>{

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(function (response) {
        console.log(response.data)
          setUsers(response.data)
          setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

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

export default App;
