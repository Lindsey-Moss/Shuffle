import React from 'react'
import { connect } from 'react-redux'
import { SetFrom} from '../store/actions/NavActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFrom: (string) => dispatch(SetFrom(string))
  }
}

const Profile = (props) => {

  function patience() {setTimeout(props.history.push('/auth/query'),500)}

  return (
    <>
      {props.authState.isAuthenticated ? (
        <div className="profile-page leave-room-for-jesus-i-mean-navbar">
          <div>{/*spacer for navbar*/}</div>
          <main>
          This is your profile

          </main>

        </div>
        
      ) : (
        props.setFrom('profile'),
        patience()
      )}
    </>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
