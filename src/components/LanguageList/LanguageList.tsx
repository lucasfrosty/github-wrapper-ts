import * as React from 'react';
import './LanguageList.css';

interface Props {
  languages: string[];
  onClick: (language: string) => any;
}

function LanguageList({ languages, onClick }: Props) {
  return (
    <div className="LanguageList">
      {languages.map(language => {
        function onClickHandler() {
          onClick(language);
        }

        return <button className="LanguageList__Button" key={language} onClick={onClickHandler}>{language}</button>
      })}
    </div>
  );
}

export default LanguageList;
