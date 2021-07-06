import { useEffect, useState } from "react"

import Card from "../../components/Card";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

const UserList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users')
        .then((response) => response.json())
    
      setUsers(response)
    }

    fetchUsers()
  }, [])
  
  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90vw' }}>
          <h1 style={{ padding: '.8rem 0'}}>Lista de usuários</h1>

          <div className="users-list-grid">
            {users.map((user: User) => (
              <Card
                key={user.id}
                image={user.avatar_url}
                title={user.login}
              />
            ))}
          </div>
        </div>
      </div>


      <ul style={{ display: 'none' }}>
        {users.map((user: User) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList