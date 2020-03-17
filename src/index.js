import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';

const App = () => {
  return (
    <div>
      <h1>Hello Mr.React!</h1>
      <Table />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('div#root'));
