import * as React from 'react';

interface Props {
  test?: string
}

function App({ test }: Props) {
  return <h1>{test}</h1>
}

export default App;
