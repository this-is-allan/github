import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Card from "../../components/Card";

import { User } from "../../utils/types";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users')
        .then((response) => response.json())
    
      setUsers(response)
    }

    fetchUsers()
  }, [])
  
  return (
    <div className="users-list-grid">
      {users.map((user) => (
        <Link to={`users/${user.login}`}>
          <Card
            key={user.id}
            image={user.avatar_url}
            title={user.login}
          />
        </Link>
      ))}
    </div>
  )
}

export default UserList