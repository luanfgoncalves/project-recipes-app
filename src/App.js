import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

// <div className="meals">
//   <span className="logo">TRYBE</span>
//   <object
//     className="rocksGlass"
//     type="image/svg+xml"
//     data={ rockGlass }
//   >
//     Glass
//   </object>
// </div>
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ Login } />
      </BrowserRouter>
    );
  }
}

export default App;
