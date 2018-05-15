import * as React from 'react';
import './Repo.css';

export interface IRepo {
  name: string;
  url: string;
  nameWithOwner: string;
  stargazers: {
    totalCount: number;
  };
  owner: {
    avatarUrl: string;
    login: string;
  }
}

interface Props {
  repo: IRepo;
}


function Repo({ repo }: Props) {
  const {
    name,
    stargazers,
    owner,
    nameWithOwner,
    url
  } = repo;
  return (
    <React.Fragment>
      <div>
        <h1>{name}</h1>
        <div className="Flex-Container">
          <span className="bold">Stars:</span> {stargazers.totalCount}
        </div>
        <div className="Flex-Container">
          <span className="bold">Owner:</span>
          <img
            src={owner.avatarUrl}
            className="RepoList__Logo"
            alt="Owner Logo"
          />
          {owner.login}
        </div>
        <div className="Flex-Container">
          <span className="bold">Repo:</span>{" "}
          <a target="_blank" href={url}>
            {nameWithOwner}
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Repo;
