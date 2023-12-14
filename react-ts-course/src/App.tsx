import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

function App() {
const [users, setUsers] = useState<IUser[]>([])

async function fetchUsers() {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/')

    setUsers(response.data)
  } catch (e) {
    alert(e)
  }
}

useEffect(() => {
  fetchUsers()
}, [])

  return (
    <div>
      <Card width='200px' height='200px' variant={CardVariant.outlined} onClick={() => window.alert("You clicked the card")}>
        <button>Button</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
