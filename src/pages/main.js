import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Container, Form } from "./styles";
import ListRepositories from "../components/ListRepositories";
import api from "../services";
export default function Main() {
  const [repositore, setRepositore] = useState([]);
  const [inputRepositore, setInputRepositore] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .get(`${inputRepositore}`)
      .then(response => {
        console.log(response.data);
        setRepositore([...repositore, response.data]);
        setInputRepositore("");
      })
      .catch(erro => {
        console.log(erro, "not Foud");
      })
      .finally(() => console.log("Finalizado"));
  }

  return (
    <Container>
      <img src={logo} alt="Repositores" />
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="usuário/repositorio"
          value={inputRepositore}
          onChange={e => {
            setInputRepositore(e.target.value);
          }}
        />
        <button type="submit">Procurar</button>
      </Form>
      <ListRepositories dadosRepositer={repositore} />
    </Container>
  );
}
