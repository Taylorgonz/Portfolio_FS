import React, { useState } from 'react';
import './App.css';
import Upload from './Components/Upload/index'
import Login from './Components/Login/index'
import Main from './Components/Main/index'
import Modal from './Components/Modal/index'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContextProvider, useAuthState } from './firebase'


const AuthenticatedRoute = ({ render: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to='/login' />
      }
    />
  )
}
const UnauthenticatedRoute = ({ render: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return (
    <Route
      { ...props }
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to='/upload' />
      }
    />
  )
}


function App() {

  const [modalImage, setModalImage] = useState(null)
  const [modalMain, setModalMain] = useState(null)
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Main setModalImage={setModalImage} modalMain={modalMain} setModalMain={setModalMain} />} />
            <AuthenticatedRoute exact path="/upload" render={() => <Upload setModalImage={setModalImage} setModalMain={setModalMain} />} />
            <UnauthenticatedRoute exact path="/login" render={() => <Login />} />
          </Switch>
        </Router>
        {modalMain  && <Modal modalMain={modalMain} setModalMain={setModalMain} modalImage={modalImage} setModalImage={setModalImage} />}
      </div>
    </AuthContextProvider>
  );
}

export default App;
