import * as React from 'react';
import './RepoList.css';

interface Props {
  language: string | undefined;
  viewer?: string;
}

function RepoList({ language, viewer }: Props) {
  return (
    <React.Fragment>
      <h1>{language}</h1>
      <h2>{viewer}</h2>

      <div>
        <div className="Flex-Container">
          <span className="bold">Stars:</span> 1302
        </div>
        <div className="Flex-Container">
          <span className="bold">Owner:</span>
          <img
            src='https://avatars2.githubusercontent.com/u/15235605?s=400&u=5f1a369caf235bff10d6d4cf0351506b7b317e45&v=4'
            className="RepoList__Logo"
            alt="Owner Logo"
          />
          Lucas Ferreira
        </div>
        <div className="Flex-Container">
          <span className="bold">Repo:</span>{" "}
          <a target="_blank" href='#'>
            idk
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RepoList;
