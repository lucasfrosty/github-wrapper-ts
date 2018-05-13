import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App test=":)" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
