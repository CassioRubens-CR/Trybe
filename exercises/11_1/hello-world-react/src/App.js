import React from 'react';
// import logo from './logo.svg';
import './App.css';

const commitments = ['Tomas café', 'Tomar banho', 'Trabalhar', 'Almoçar', 'Estudar na Trybe!', 'Jantar', 'Dormir'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      <div><h1>Compromissos</h1></div>
      {commitments.map(mayCommitments => task(mayCommitments))}
    </ul>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
