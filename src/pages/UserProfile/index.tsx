import UserHeader from "../../organisms/UserHeader";

function UserProfile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '55vw' }}>
        <UserHeader />
      </div>
    </div>
  );
}

export default UserProfile;
