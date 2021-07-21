import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ToggleNav} from '../store/actions/NavActions'
import video from '../styles/purple-dust.mp4'

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
     <div className="video-bg"><video id='videoBG' autoPlay loop muted>
    <source src={video} type='video/mp4' alt='Your browser does not support the video tag.'/>
  </video></div>
    <div className="introduction-box">
      Welcome to Shuffle.
    </div>
     <button className="daily-draw-btn" onClick={()=>{props.history.push('reading/daily')}}>Daily Draw</button>
     </main>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
