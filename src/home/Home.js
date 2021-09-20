import React, { useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Homepage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");
  //activates joinRoom function defined on the backend
  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
      //if empty error message pops up and returns to the same page
    } else {
      alert("Vous devez entrer un nom d'utilisateur et un nom de salle");
      window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <h1>Bienvenu sur l'App Chat</h1>
      <input
        placeholder="Entrez votre nom d'utilisateur"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      ></input>
      <input
        placeholder="Entrez le nom de la salle"
        value={roomname}
        onChange={(e) => setroomname(e.target.value)}
      ></input>
      <Link to={`/chat/${roomname}/${username}`}>
        <button onClick={sendData}>Rejoindre</button>
      </Link>
    </div>
  );
}

export default Homepage;