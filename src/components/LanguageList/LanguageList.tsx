import * as React from 'react';

interface Props {
  languages: string[];
  onClick: (language: string) => any;
}

function LanguageList({ languages, onClick }: Props) {
  return (
    <React.Fragment>
      {languages.map(language => {
        function onClickHandler() {
          onClick(language);
        }

        return <button key={language} onClick={onClickHandler}>{language}</button>
      })}
    </React.Fragment>
  );
}

export default LanguageList;
