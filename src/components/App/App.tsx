import * as React from 'react';
import LanguageList from '../LanguageList';

interface State {
  currentLanguage: string | undefined;
  languages: string[];
}

class App extends React.Component<any, State> {
  state = {
    currentLanguage: undefined,
    languages: ['javascript', 'ruby', 'python', 'typescript', 'java'],
  }

  componentDidMount() {
    this.setState({
      currentLanguage: this.state.languages[0]
    });
  }

  changeCurrentLanguage = (language: string) => {
    this.setState({
      currentLanguage: language,
    });
  }

  render() {
    const { languages } = this.state;
    return (
      <div>
        <LanguageList languages={languages} onClick={this.changeCurrentLanguage} />
      </div>

    )
  }
}

export default App;
