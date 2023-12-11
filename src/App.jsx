// import { LinkedList } from "./linkedList/Test";
import { useKeycloak } from "@react-keycloak/web";

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  // const list = new LinkedList();
  // list.prepend(5);
  // list.prepend(0);
  // list.append(10);
  // list.append(15);
  // list.prepend(-5);
  // list.display();
  // list.removeFromFront();
  // console.log("tail ->", list.removeFromEnd());
  // list.display();
  // console.log(keycloak.tokenParsed);
  console.log(keycloak.idTokenParsed, keycloak.tokenParsed);

  return (
    <>
      {/* <p>Test: {keycloak.authenticated ? "True" : "False"}</p> */}
      {keycloak.authenticated ? (
        <img
          src={keycloak.idTokenParsed.picture}
          alt="no-image"
          width={100}
          height={100}
        />
      ) : (
        <p>Image</p>
      )}
      <button
        onClick={() => {
          keycloak.login();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          const temp = keycloak.logout();
        }}
      >
        Logout
      </button>
      <button
        onClick={async () => {
          const response = await keycloak.updateToken(-1);
          console.log(response);
          console.log("-> ", keycloak.idTokenParsed);
        }}
      >
        Refresh
      </button>
    </>
  );
};

export default App;
