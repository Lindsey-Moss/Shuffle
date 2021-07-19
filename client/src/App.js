import './styles/App.css';
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './components/Nav';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile'
import Reading from './pages/Reading'
import DailyDraw from './pages/DailyDraw'
import Journal from './pages/Journal'
import NewEntry from './pages/NewEntry';
import axios from 'axios';
import { BASE_URL } from './globals';
import { SessionChecked, SetUser } from './store/actions/AuthActions';
import { ToggleNav} from './store/actions/NavActions'

const mapStateToProps = ({ authState, navState }) => {
  return { authState, navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (bool) => dispatch(SessionChecked(bool)),
    setUser: (userID) => dispatch(SetUser(userID)),
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}

function App(props) {
  const history = useHistory()

  const getToken = async() => {
    let token = localStorage.getItem('token')
    if (token) {
      const res = await axios.get(`${BASE_URL}auth/session`)
      return (props.setUser(res.data.id), props.checkSession(true))
    }
  }

  const openSide = () => {
    props.navState.navOpen ? (props.toggleNav(true)) : (props.toggleNav(true))
  }

  const logOut = () => {
    props.setUser(null)
    props.checkSession(false)
    localStorage.clear()
    history.push('/')
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
    <nav>
      <button className="openbtn" onClick={()=>{openSide()}}>&#10236;</button>
      <Nav {...props} 
        history={history} 
        logOut={logOut}
      />
    </nav>
      <div className="App">
    <Switch>

        <Route exact path ="/" render={(props) => (
            <Home {...props} 
            />
          )}
        />
        <Route path="/auth/" render={Auth} />

        <Route exact path="/profile" render={(props) => (
          <Profile {...props}
            history={history}
            getToken={getToken}/>
          )}
        />

        <Route exact path="/reading" render={(props) => (
          <Reading {...props}
            history={history}
          />
          )}
        />

        <Route exact path="/reading/daily" render={(props) => (
          <DailyDraw {...props}
            history={history}
          />
          )}
        />

        <Route exact path="/journal" render={(props) => (
          <Journal {...props}
            history={history}
            getToken={getToken}
          />
          )}
        />

        <Route exact path="/journal/new" render={(props) => (
          <NewEntry {...props}
            history={history}
            getToken={getToken}
          />
          )} 
        />

    </Switch>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
