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
import axios from 'axios';
import { BASE_URL } from './globals';
import { SessionChecked, SetUser } from './store/actions/AuthActions';
import NewEntry from './pages/NewEntry';

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
      return props.setUser(res.data.id), props.checkSession(true)
    }
  }

  const openSide = () => {
    let aside = document.querySelector('.navbar')
    let spacer = document.querySelector('.leave-room-for-jesus-i-mean-navbar')
    spacer.style.gridTemplateColumns= '180px 1fr'
    aside.style.width="180px";
    aside.style.opacity=1;
    aside.style.zIndex=10
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
      <button className="openbtn" onClick={()=>{openSide()}}>&#9776;</button>
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
        <Route path="/auth/" component={Auth} />

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
