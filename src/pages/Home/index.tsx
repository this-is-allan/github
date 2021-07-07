import UserList from "../../organisms/UserList";

function Home() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90vw' }}>
          <h1 style={{ padding: '.8rem 0' }}>Lista de usuários</h1>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default Home;
