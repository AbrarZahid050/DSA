import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";

const Playground = () => {
  const [code, setCode] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const frag = currentUrl.split("#");
    const urlFrag = frag[0];

    const url = new URLSearchParams(urlFrag);
    if (url.has("code")) {
      const code = url.get("code");
      console.log("code -> ", code);
      setCode(code);
    }
  }, []);

  const sendReq = async () => {
    const data = {
      client_id: "myclient",
      response_type: "code",
      redirect_uri: "http://localhost:5173/",
      scope: "openid albums:create albums:delete myrole",
    };

    const keycloakUri = `http://192.168.18.130:8080/realms/myrealm/protocol/openid-connect/auth?client_id=${data.client_id}&response_type=${data.response_type}&redirect_uri=${data.redirect_uri}&scope=${data.scope}`;
    window.location.href = keycloakUri;
  };

  const sendAuthCode = async () => {
    const data = new URLSearchParams();
    data.append("grant_type", "authorization_code");
    data.append("client_id", "myclient");
    data.append("code", code);
    data.append("redirect_uri", "http://localhost:5173/");

    const tokenReq = await fetch(
      "http://192.168.18.130:8080/realms/myrealm/protocol/openid-connect/token",
      {
        method: "POST",
        body: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    );
    const res = await tokenReq.json();
    console.log("-> [response] : ", res);

    let decodedToken = decodeToken(res.id_token);
    console.log("-> [sendAuthCode] id_token : ", decodedToken);
    setRefreshToken(res.refresh_token);

    decodedToken = decodeToken(res.access_token);
    console.log("-> [sendAuthCode] access_token : ", decodedToken);
    setAccessToken(res.access_token);
  };

  const sendRefresh = async () => {
    const data = new URLSearchParams();
    data.append("grant_type", "refresh_token");
    data.append("client_id", "myclient");
    data.append("refresh_token", refreshToken);
    data.append("scope", "openid myrole");
    const refreshReq = await fetch(
      "http://192.168.18.130:8080/realms/myrealm/protocol/openid-connect/token",
      {
        method: "POST",
        body: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    );
    const res = await refreshReq.json();

    let decodedToken = decodeToken(res.id_token);
    console.log("-> [sendRefresh] id_token: ", decodedToken);
    setRefreshToken(() => {
      return res.refresh_token;
    });
    decodedToken = decodeToken(res.access_token);
    console.log("-> [sendRefresh] access_token: ", decodedToken);
    // setAccessToken(() => {
    //   return res.access_token;
    // });
  };

  const sendUserInfo = async () => {
    const data = new URLSearchParams();
    data.append("grant_type", "refresh_token");

    const userInfoReq = await fetch(
      "http://192.168.18.130:8080/realms/myrealm/protocol/openid-connect/userinfo",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const res = await userInfoReq.json();
    console.log(res);
  };

  const publicAPI = async () => {
    const res = await fetch("http://192.168.18.130:8000/public/");
    const data = await res.text();
    console.log(data);
  };

  const restrictedAPI = async () => {
    const res = await fetch("http://192.168.18.130:8000/secured/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.text();
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => {
          sendReq();
        }}
      >
        Start
      </button>
      <button onClick={sendAuthCode}>Send auth code</button>
      <button onClick={sendRefresh}>Refresh token</button>
      <button onClick={sendUserInfo}>UserInfo</button>
      <hr />
      <button onClick={publicAPI}>Public Api</button>
      <button onClick={restrictedAPI}>Restricted Api</button>
    </>
  );
};

export default Playground;
