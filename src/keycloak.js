import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://192.168.18.130:8080/",
  realm: "myrealm",
  clientId: "myclient",
});

export default keycloak;
