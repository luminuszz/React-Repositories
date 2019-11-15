import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Container, Form } from "./styles";
import ListRepositories from "../components/ListRepositories";
import api from "../services";
import moment from "moment";

export default function Main() {
  const [repositore, setRepositore] = useState([]);
  const [inputRepositore, setInputRepositore] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    await api
      .get(`${inputRepositore}`)
      .then(response => {
        response.data.lastCommit = moment(response.data.pushed_at).fromNow();
        console.log(response);
        setRepositore([...repositore, response.data]);
        setInputRepositore("");
        setError(false);
      })
      .catch(teste => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizado");
        setLoading(false);
      });
  }

  return (
    <Container>
      <img src={logo} alt="Repositores" />
      <Form errorvalidate={error} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="usuário/repositorio"
          value={inputRepositore}
          onChange={e => {
            setInputRepositore(e.target.value);
          }}
        />
        <button type="submit">
          {loading ? <i className="fa fa-spinner"></i> : "Procurar"}
        </button>
      </Form>
      <ListRepositories dadosRepositer={repositore} />
    </Container>
  );
}
