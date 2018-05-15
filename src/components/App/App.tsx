import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import LanguageList from '../LanguageList';
import Repo, { IRepo } from '../Repo';

export type ValidLanguage = 'javascript' | 'ruby' | 'python' | 'typescript' | 'java';
export type CurrentLanguage = ValidLanguage | undefined;

interface State {
  currentLanguage: CurrentLanguage;
  languages: ValidLanguage[];
}

function GET_TOP_LANGUAGES(language: CurrentLanguage) {
  return gql`
    query {
      search(first: 10, query: "language:${language}", type: REPOSITORY) {
        nodes {
          ... on Repository {
            name,
            nameWithOwner
            url
            owner {
              avatarUrl
              login
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `;
}

class App extends React.Component<any, State> {
  state = {
    currentLanguage: undefined,
    languages: ['javascript', 'ruby', 'python', 'typescript', 'java'] as ValidLanguage[],
  }

  componentDidMount() {
    this.setState({
      currentLanguage: this.state.languages[0] as ValidLanguage,
    });
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    return (this.state.currentLanguage !== nextState.currentLanguage);
  }

  changeCurrentLanguage = (language: ValidLanguage): void => {
    this.setState({
      currentLanguage: language,
    });
  }

  render() {
    const { languages, currentLanguage } = this.state;
    return (
      <Query query={GET_TOP_LANGUAGES(currentLanguage)}>
        {({ data, loading }) => {
          if (loading || !data) {
            return <div>Loading...</div>;
          }

          console.log(data);

          return (
            <div>
              <LanguageList languages={languages} onClick={this.changeCurrentLanguage} />
              {data.search.nodes.map((repo: IRepo) => (
                <Repo key={repo.name} repo={repo} />
              ))}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default App;
