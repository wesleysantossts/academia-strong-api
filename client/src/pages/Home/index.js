import {useState} from "react";
import api from "../../services/api.js";

import Header from "../../components/Header";


export default function Home() {
  // const [user, setUser] = useState([]);

  

  return (
    <div>
      <Header/>
      <div className="content">
        <h1>Dashboard</h1>

        <section className="videos">
          <h2>Treinos</h2>
          <div></div>
        </section>
        <section className="evolucao">
          <h2>Evolução</h2>
        </section>

      </div>
    </div>
  );
}