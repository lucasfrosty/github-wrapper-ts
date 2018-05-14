import * as React from 'react';
import LanguageList from '../LanguageList';
import RepoList from '../RepoList';

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
      currentLanguage: this.state.languages[0],
    });
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    return (this.state.currentLanguage !== nextState.currentLanguage);
  }

  changeCurrentLanguage = (language: string) => {
    this.setState({
      currentLanguage: language,
    });
  }

  render() {
    const { languages, currentLanguage } = this.state;
    return (
      <div>
        <LanguageList languages={languages} onClick={this.changeCurrentLanguage} />
        <RepoList language={currentLanguage} />
      </div>
    );
  }
}

export default App;
