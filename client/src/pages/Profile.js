import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Profile = (props) => {

  return (
    <>
      {props.authState.isAuthenticated ? (
        <div className="profile-page leave-room-for-jesus-i-mean-navbar">
          <div>{/*spacer for navbar*/}</div>
      
          This is your profile

        </div>
        
      ) : (
        props.history.push('/auth/query')
      )}
    </>
  )
}
export default connect(mapStateToProps)(Profile)
