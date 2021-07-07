import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { Title } from "../../components/Typography";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

import { User } from "../../utils/types";

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const response = await fetch('https://api.github.com/users')
      .then((response) => response.json())
      .catch(() => setError(true))
      
      setUsers(response)
      setLoading(false)
    }
    
    fetchUsers()
  }, [])
  
  return (
    <div className="users-list-grid">
      {loading ?
        <Loading />
      : (
        <>
          {error ?
            <Title className="text-center" color="red">Houve um problema na requisição</Title>
          : (
            <>
              {users.map((user) => (
                <Link to={`users/${user.login}`}>
                  <Card
                    key={user.id}
                    image={user.avatar_url}
                    title={user.login}
                  />
                </Link>
              ))}
            </>
          )}
        </>
      )
      }
    </div>
  )
}

export default UserList