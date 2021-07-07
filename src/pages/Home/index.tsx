import { Title } from "../../components/Typography";

import UserList from "../../organisms/UserList";

function Home() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90vw' }}>
          <Title className="mb-4 mt-4" heading>Lista de usuários</Title>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default Home;
