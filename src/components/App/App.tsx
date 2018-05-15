import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LanguageList from '../LanguageList';
import RepoList from '../RepoList';

interface State {
  currentLanguage: string | undefined;
  languages: string[];
}

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

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
      <Query query={GET_CURRENT_USER}>
        {({ data, loading }) => {
          if (loading || !data) {
            return <div>Loading...</div>;
          }

          return (
            <div>
              <LanguageList languages={languages} onClick={this.changeCurrentLanguage} />
              <RepoList language={currentLanguage} viewer={data.viewer.name} />
            </div>
          );
        }}
      </Query>
    )
  }
}

export default App;
