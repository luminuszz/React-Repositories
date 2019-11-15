import React from "react";
import logo from "../../assets/logo.png";
import { Container, Repositore } from "./styles";
import propTypes from "prop-types";
const ListRepositories = ({ dadosRepositer }) => (
  <Container>
    {dadosRepositer.map(dadosRepositer => (
      <Repositore key={dadosRepositer.owner.id}>
        <header>
          <img
            src={dadosRepositer.owner.avatar_url}
            alt={dadosRepositer.owner.login}
          />
          <strong>{dadosRepositer.name}</strong>
          <small>{dadosRepositer.owner.login}</small>
        </header>

        <ul>
          <li>
            {dadosRepositer.stargazers_count}
            <small>stars</small>
          </li>
          <li>
            {dadosRepositer.forks_count}
            <small>forks</small>
          </li>
          <li>
            {dadosRepositer.open_issues_count}
            <small>issues</small>
          </li>
          <li>
            {dadosRepositer.lastCommit}
            <small>lastCommit</small>
          </li>
        </ul>
      </Repositore>
    ))}
  </Container>
);

ListRepositories.propTypes = {
  dadosRepositer: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      owner: propTypes.shape({
        login: propTypes.string,
        avatar_url: propTypes.string
      }),
      stargazers_count: propTypes.number,
      forks_count: propTypes.number,
      open_issues_count: propTypes.number,
      lastCommit: propTypes.string
    })
  ).isRequired
};

export default ListRepositories;
