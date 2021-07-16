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

  const changeDate = (ISOdate) => {
    let dateParts = ISOdate.split("-");
    let newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2))
    let dateWithoutTime = ((newDate.getMonth() + 1) + '.' + (newDate.getDate()) + '.' + newDate.getFullYear())
    return dateWithoutTime;
  }

  const checkSide = () => {
    props.toggleNav(props.navState.navOpen)
  }

  // for onSubmit of edits, make sure to ONLY send back fields from userState.updateUser that != '' !

  useEffect(() => {
    getToken();
    fetchUser(authState.thisUser);
    checkSide()
  },[authState.thisUser])

  return (
    <>
      {authState.isAuthenticated ? (
        <div className="profile-page leave-room-for-jesus-i-mean-navbar">
          <div>{/*spacer for navbar*/}</div>
          <main className="profile-main">
            <div className="profile-column">
              <div className="profile-top">
                <div className="profile-image-box">
                  <img className="profile-image" src={user.image} alt={user.preferredName}/>
                </div>
                <div className="profile-titlecard">
                  <h1>{user.preferredName}</h1>
                  <h3>{user.userName}</h3>
                </div>
              </div>
                <div className="profile-detail-box">
                  <div className="profile-editbtn-box">
                    <button className="profile-editbtn">Edit Profile</button>
                  </div>
                  <h6>journaling since {changeDate(user.createdAt)}</h6>
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
