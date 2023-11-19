import { LinkedList } from "./linkedList/Test";
import { useKeycloak } from "@react-keycloak/web";

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  const list = new LinkedList();
  list.prepend(5);
  list.prepend(0);
  list.append(10);
  list.append(15);
  list.prepend(-5);
  list.display();
  list.removeFromFront();
  console.log("tail ->", list.removeFromEnd());
  list.display();

  return <button onClick={() => keycloak.login()}>Login</button>;
};

export default App;
