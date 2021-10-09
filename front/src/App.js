import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Registration from './Registration';
import Login from './Login';
import { AnimatePresence } from "framer-motion";
function App() {
  return (

    <div className="App">
      <header className="">
        <BrowserRouter>
        <div>
          <Header />
          <AnimatePresence>
          <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Contact" component={Contact}/>
              <Route path="/Registration" component={Registration}/>
              <Route path="/Login" component={Login}/>
           </Switch>
          </AnimatePresence>
        </div> 
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
