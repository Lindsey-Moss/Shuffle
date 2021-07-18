import React, { useEffect } from 'react'
import Unauthenticated from '../components/Unauthenticated'
import { connect } from 'react-redux'
import { SetFrom, ToggleNav } from '../store/actions/NavActions'
import {
  LoadUser,
  UserFormField,
  UpdateUserAction,
  DeleteUserAction
} from '../store/actions/UserActions'
import ProfileDetails from '../components/ProfileDetails'

const mapStateToProps = ({ authState, navState, userState }) => {
  return { authState, navState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFrom: (string) => dispatch(SetFrom(string)),
    toggleNav: (bool) => dispatch(ToggleNav(bool)),
    fetchUser: (userID) => dispatch(LoadUser(userID)),
    setUserForm: (formName, formValue) => dispatch(UserFormField(formName,formValue)),
    sendChangesToUser: (userID, userForm) => dispatch(UpdateUserAction(userID,userForm)),
    removeUser: (userID) => dispatch(DeleteUserAction(userID))
  }
}

const Profile = (props) => {
  const { getToken, fetchUser, authState } = props
  const user = props.userState.thisUsersInfo

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  // for onSubmit of edits, make sure to ONLY send back fields from userState.updateUser that != '' !

  useEffect(() => {
    getToken();
    fetchUser(authState.thisUser);
    checkSide()
  },[authState.isAuthenticated])

  return (
    <>
      {authState.isAuthenticated && user ? (
        <div className="profile-page leave-room-for-jesus-i-mean-navbar">
          <div>{/*spacer for navbar*/}</div>
          <main className="profile-main">
            
            <div className="profile-column">
              <div className="profile-top" style={{backgroundImage:`url(${user.banner})`}}>
                <div className="profile-image-box">
                  <img className="profile-image" src={ user.image } alt={ user.preferredName } />
                </div>
                <div className="profile-titlecard">
                  <h1>{ user.preferredName }</h1>
                  <h3>{ user.userName }</h3>
                </div>
              </div>
              <ProfileDetails user={user}/>
              
              <div className="profile-about-box">
                <h2>About</h2>
                { (user.zodiac) ? (<h5>Sign: { user.zodiac }</h5>) : (null) }
                <h5>Bio:</h5>
                <p>{(user.bio) ? (user.bio) : (<span className="profile-nobio">This user has not provided a bio.</span>)}</p>
                
              </div>

            </div>

          </main>

        </div>
        
      ) : (
        <Unauthenticated history={props.history} setFrom={props.setFrom} redirect='profile' />

      )}
    </>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
