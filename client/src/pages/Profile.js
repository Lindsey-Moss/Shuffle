import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const Profile = (props) => {
  useEffect(() => {
    props.getToken()
  }, [])
  return (
    <div className="profile-page">
      <div>{/*spacer for navbar*/}</div>
     This is your profile
    </div>
  )
}
export default connect(mapStateToProps)(Profile)
