import { Title } from "../../components/Typography";

import UserList from "../../organisms/UserList";

function Home() {
  return (
    <div className="col-10 col-offset-1">
      <Title className="mb-4 mt-4" heading>Lista de usuários</Title>
      <UserList />
    </div>
  );
}

export default Home;
