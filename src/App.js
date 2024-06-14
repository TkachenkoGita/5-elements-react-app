import React, { useEffect, useState } from "react";
import "./index.scss";
import Users from "./components/Users";
import Success from "./components/Success";


// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert("ошибка при получении пользователя");
      })
      .finally(() => setIsLoading(false));
  }, []);
  const onChangeSearchValue = ({ target: { value } }) => {
    setSearchValue(value);
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSetInvites = () => {
    setSuccess(true)
  }
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
            onClickInvite={onClickInvite}
            onClickSetInvites={onClickSetInvites}
        />
      )}
    </div>
  );
}

export default App;
