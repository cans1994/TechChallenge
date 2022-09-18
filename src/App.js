import './App.css';
import { useState, useEffect} from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");


  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <header>
      <title>Les Argonautes</title>
            <h1>
              <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
              Les Argonautes
            </h1>
          </header>
          <h2>Ajouter un(e) Argonaute</h2>
          <label htmlFor="name">Nom de l'Argonaute :</label>
      <input id="name" 
              name="name" 
              type="text" 
              placeholder="Charalampos" onChange={(event) => {setNewName(event.target.value);}}/>
      <button onClick={createUser} type="submit"> Envoyer </button>

    <h2>Membres de l'équipage :</h2>
    <section className="member-list">
      <div className="grid-container">
    {users.map((user) => {
      return (
        <div>
          {" "}
          <div className="member-item"> {user.name}</div>
        </div>
      );
    })}
</div>
</section>
<footer>
    <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
    </footer>
  </div>
);
}

export default App;
