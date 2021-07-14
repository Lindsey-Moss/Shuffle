import './styles/App.css';
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './pages/Home';
import Auth from './pages/Auth';
import axios from 'axios';
import { BASE_URL } from './globals';
import { SessionChecked, SetUser } from './store/actions/AuthActions';

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (bool) => dispatch(SessionChecked(bool)),
    setUser: (userID) => dispatch(SetUser(userID))
  }
}

function App(props) {
  const history = useHistory()

  const getToken = async() => {
    let token = localStorage.getItem('token')
    if (token) {
      const res = await axios.get(`${BASE_URL}auth/session`)
      props.setUser(res.data.userID)
      return props.checkSession(true)
    }
  }

  const logOut = () => {
    props.setUser(null)
    props.checkSession(false)
    localStorage.clear()
    history.push('/')
  }

  useEffect(() => {
    getToken()
  }, [props.authState.isAuthenticated])

  return (
    <Switch>
      <div className="App">

        <Route exact path ="/" render={(props) => (
            <Home {...props} 
              history={history}
              getToken={getToken}
              logOut={logOut}
            />
          )}
        />
        <Route path="/auth/" component={Auth} />


      </div>
    </Switch>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
