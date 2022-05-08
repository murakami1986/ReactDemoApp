import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers, userAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = userAllUsers();
  const ocClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={ocClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
