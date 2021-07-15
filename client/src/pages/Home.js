import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Home = (props) => {

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
export default connect(mapStateToProps)(Home)
