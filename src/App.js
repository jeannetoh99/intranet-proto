import React from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Login from './components/pages/login';
import Admin from './components/pages/admin';
import Student from './components/pages/student';
import Logout from './components/pages/logout';
import Settings from './components/pages/settings';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/Login' component={Login}/>
         <Route path='/Admin' component={Admin}/>
         <Route path='/Student' component={Student}/>
         <Route path='/Settings' component={Settings}/>
         <Route path='/Logout' component={Logout}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
