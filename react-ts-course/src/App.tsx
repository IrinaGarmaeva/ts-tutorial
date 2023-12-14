import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import List from './components/List';
import { IUser } from './types/types';
import axios from 'axios';
import UserItem from './components/UserItem';

function App() {
const [users, setUsers] = useState<IUser[]>([])

async function fetchUsers() {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/')
    console.log(response.data)
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
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}/>
    </div>
  );
}

export default App;
