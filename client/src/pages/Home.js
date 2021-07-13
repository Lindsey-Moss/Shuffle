import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Home = (props) => {
  useEffect(() => {
    props.getToken()
  }, [])
  return (
    <div className="homepage">
     This is the homepage
     {props.authState.isAuthenticated ? (<button onClick={props.logOut}>Log Out</button>):(<button onClick={()=>{props.history.push('/auth')}}>Log In</button>)}
    </div>
  )
}
export default connect(mapStateToProps)(Home)
