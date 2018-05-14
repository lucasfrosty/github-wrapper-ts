import * as React from 'react';

interface Props {
  languages: string[];
}

function LanguageList({ languages }: Props) {
  return (
    <p>
      {JSON.stringify(languages)}
    </p>
  )
}

export default LanguageList;
