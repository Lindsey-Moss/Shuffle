import './styles/App.css';
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  const history = useHistory()
  return (
    <Switch>
      <div className="App">
        
        This is an app
        <Route exact path ="/" render={(props) => (
            <Home {...props} 
              history={history}
            />
          )}
        />
        
      </div>
    </Switch>
  );
}

export default App;
