import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LanguageList from '../LanguageList';
import Repo, { IRepo } from '../Repo';

interface State {
  currentLanguage: string | undefined;
  languages: string[];
}



const GET_CURRENT_USER = (language: string | undefined) => gql`
  query {
    search(first: 10, query: "language:${language}", type: REPOSITORY) {
      nodes {
        ... on Repository {
          description
          name
        }
      }
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
      <Query query={GET_CURRENT_USER(currentLanguage)}>
        {({ data, loading }) => {
          if (loading || !data) {
            return <div>Loading...</div>;
          }

          console.log(data);

          return (
            <div>
              <LanguageList languages={languages} onClick={this.changeCurrentLanguage} />
              {data.search.nodes.map((repo: IRepo) => (
                <Repo key={repo.name} language={currentLanguage} repo={repo} />
              ))}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default App;
