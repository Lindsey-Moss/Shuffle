import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ToggleNav} from '../store/actions/NavActions'

const mapStateToProps = ({ authState,navState }) => {
  return { authState,navState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: (bool) => dispatch(ToggleNav(bool))
  }
}

const Home = (props) => {

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  useEffect(() => {
    checkSide()
  }, [])

  return (
    <div className="homepage leave-room-for-jesus-i-mean-navbar">
      <div>{/*spacer for navbar*/}</div>
     <main className="dashboard">
       This is the homepage

     <button onClick={()=>{props.history.push('reading/daily')}}>Daily Draw</button>
     </main>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
