import React, {useState} from 'react';
import './App.css';
import Hero from "./Components/Hero/index";
import About from "./Components/About/index";
import Photography from "./Components/Photography/index";
import Upload from './Components/Upload/index'
import Main from './Components/Main/index'
import Modal from './Components/Modal/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const [modalImage, setModalImage] = useState(null)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Main modalImage={modalImage} setModalImage={setModalImage}/>}/>
          <Route exact path="/upload" render={() => <Upload/>} />
        </Switch>
      </Router>
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
      
        {/* <Hero />
      
        <About />
      
        <Photography /> */}



    </div>
  );
}

export default App;
