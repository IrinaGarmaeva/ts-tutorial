import axios from "axios";
import React, { FC, useState, useEffect,  } from "react";
import { IUser } from "../types/types";

import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  id: string;
	[key: string]: string | undefined;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
	const navigate = useNavigate()

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

	function handleGoBack(){ 
		navigate(-1)
	}

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.address.city} {user?.address.street}
      </div>
    </div>
  );
};

export default UserItemPage;
