import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Home = (props) => {

  return (
    <div className="homepage leave-room-for-jesus-i-mean-navbar">
      <div>{/*spacer for navbar*/}</div>
     This is the homepage
    </div>
  )
}
export default connect(mapStateToProps)(Home)
