import * as React from 'react';

interface Props {
  language: string | undefined;
}

function RepoList({ language }: Props) {
  return <p>{language || 'Loading...'}</p>
}

export default RepoList;
