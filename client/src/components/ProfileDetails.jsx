import React from 'react'
import { connect } from 'react-redux'
import { UpdateUserAction, UserFormField, DeleteUserAction } from '../store/actions/UserActions'


const mapStateToProps = ({ userState, authState }) => {
  return { userState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdateForm: (formName, formValue) => dispatch(UserFormField(formName, formValue)),
    sendUpdates: (userID, userForm) => dispatch(UpdateUserAction(userID, userForm))
  }
}

const ProfileDetails = (props) => {
  const { user, userState, authState } = props

  const getState = (zipString) => {
    let zipcode = parseInt(zipString, 10);

    let st;
    let state;

    /* Code cases alphabetized by state */
    if (zipcode >= 35000 && zipcode <= 36999) {
      st = 'AL';
      state = 'Alabama';
    } else if (zipcode >= 99500 && zipcode <= 99999) {
      st = 'AK';
      state = 'Alaska';
    } else if (zipcode >= 85000 && zipcode <= 86999) {
      st = 'AZ';
      state = 'Arizona';
    } else if (zipcode >= 71600 && zipcode <= 72999) {
      st = 'AR';
      state = 'Arkansas';
    } else if (zipcode >= 90000 && zipcode <= 96699) {
      st = 'CA';
      state = 'California';
    } else if (zipcode >= 80000 && zipcode <= 81999) {
      st = 'CO';
      state = 'Colorado';
    } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
      st = 'CT';
      state = 'Connecticut';
    } else if (zipcode >= 19700 && zipcode <= 19999) {
      st = 'DE';
      state = 'Delaware';
    } else if (zipcode >= 32000 && zipcode <= 34999) {
      st = 'FL';
      state = 'Florida';
    } else if ((zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999)) {
      st = 'GA';
      state = 'Georgia';
    } else if (zipcode >= 96700 && zipcode <= 96999) {
      st = 'HI';
      state = 'Hawaii';
    } else if (zipcode >= 83200 && zipcode <= 83999) {
      st = 'ID';
      state = 'Idaho';
    } else if (zipcode >= 60000 && zipcode <= 62999) {
      st = 'IL';
      state = 'Illinois';
    } else if (zipcode >= 46000 && zipcode <= 47999) {
      st = 'IN';
      state = 'Indiana';
    } else if (zipcode >= 50000 && zipcode <= 52999) {
      st = 'IA';
      state = 'Iowa';
    } else if (zipcode >= 66000 && zipcode <= 67999) {
      st = 'KS';
      state = 'Kansas';
    } else if (zipcode >= 40000 && zipcode <= 42999) {
      st = 'KY';
      state = 'Kentucky';
    } else if (zipcode >= 70000 && zipcode <= 71599) {
      st = 'LA';
      state = 'Louisiana';
    } else if (zipcode >= 3900 && zipcode <= 4999) {
      st = 'ME';
      state = 'Maine';
    } else if (zipcode >= 20600 && zipcode <= 21999) {
      st = 'MD';
      state = 'Maryland';
    } else if ((zipcode >= 1000 && zipcode <= 2799) || (zipcode === 5501) || (zipcode === 5544)) {
      st = 'MA';
      state = 'Massachusetts';
    } else if (zipcode >= 48000 && zipcode <= 49999) {
      st = 'MI';
      state = 'Michigan';
    } else if (zipcode >= 55000 && zipcode <= 56899) {
      st = 'MN';
      state = 'Minnesota';
    } else if (zipcode >= 38600 && zipcode <= 39999) {
      st = 'MS';
      state = 'Mississippi';
    } else if (zipcode >= 63000 && zipcode <= 65999) {
      st = 'MO';
      state = 'Missouri';
    } else if (zipcode >= 59000 && zipcode <= 59999) {
      st = 'MT';
      state = 'Montana';
    } else if (zipcode >= 27000 && zipcode <= 28999) {
      st = 'NC';
      state = 'North Carolina';
    } else if (zipcode >= 58000 && zipcode <= 58999) {
      st = 'ND';
      state = 'North Dakota';
    } else if (zipcode >= 68000 && zipcode <= 69999) {
      st = 'NE';
      state = 'Nebraska';
    } else if (zipcode >= 88900 && zipcode <= 89999) {
      st = 'NV';
      state = 'Nevada';
    } else if (zipcode >= 3000 && zipcode <= 3899) {
      st = 'NH';
      state = 'New Hampshire';
    } else if (zipcode >= 7000 && zipcode <= 8999) {
      st = 'NJ';
      state = 'New Jersey';
    } else if (zipcode >= 87000 && zipcode <= 88499) {
      st = 'NM';
      state = 'New Mexico';
    } else if ((zipcode >= 10000 && zipcode <= 14999) || (zipcode === 6390) || (zipcode === 501) || (zipcode === 544)) {
      st = 'NY';
      state = 'New York';
    } else if (zipcode >= 43000 && zipcode <= 45999) {
      st = 'OH';
      state = 'Ohio';
    } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999)) {
      st = 'OK';
      state = 'Oklahoma';
    } else if (zipcode >= 97000 && zipcode <= 97999) {
      st = 'OR';
      state = 'Oregon';
    } else if (zipcode >= 15000 && zipcode <= 19699) {
      st = 'PA';
      state = 'Pennsylvania';
    } else if (zipcode >= 300 && zipcode <= 999) {
      st = 'PR';
      state = 'Puerto Rico';
    } else if (zipcode >= 2800 && zipcode <= 2999) {
      st = 'RI';
      state = 'Rhode Island';
    } else if (zipcode >= 29000 && zipcode <= 29999) {
      st = 'SC';
      state = 'South Carolina';
    } else if (zipcode >= 57000 && zipcode <= 57999) {
      st = 'SD';
      state = 'South Dakota';
    } else if (zipcode >= 37000 && zipcode <= 38599) {
      st = 'TN';
      state = 'Tennessee';
    } else if ((zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) || (zipcode >= 88500 && zipcode <= 88599)) {
      st = 'TX';
      state = 'Texas';
    } else if (zipcode >= 84000 && zipcode <= 84999) {
      st = 'UT';
      state = 'Utah';
    } else if (zipcode >= 5000 && zipcode <= 5999) {
      st = 'VT';
      state = 'Vermont';
    } else if ((zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode === 20598)) {
      st = 'VA';
      state = 'Virgina';
    } else if ((zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999)) {
      st = 'DC';
      state = 'Washington DC';
    } else if (zipcode >= 98000 && zipcode <= 99499) {
      st = 'WA';
      state = 'Washington';
    } else if (zipcode >= 24700 && zipcode <= 26999) {
      st = 'WV';
      state = 'West Virginia';
    } else if (zipcode >= 53000 && zipcode <= 54999) {
      st = 'WI';
      state = 'Wisconsin';
    } else if (zipcode >= 82000 && zipcode <= 83199) {
      st = 'WY';
      state = 'Wyoming';
    } else {
      st = 'none';
      state = 'none';
      console.log('No state found matching', zipcode);
    }

    return state;
  }

  const changeDate = (ISOdate) => {
    let dateParts = ISOdate.split("-");
    let newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2))
    let month = newDate.getMonth() + 1
    const monthString = (month) => {
      switch (month) {
        case 1:
          return 'January'
        case 2:
          return 'February'
        case 3:
          return 'March'
        case 4:
          return 'April'
        case 5:
          return 'May'
        case 6:
          return 'June'
        case 7:
          return 'July'
        case 8:
          return 'August'
        case 9:
          return 'September'
        case 10:
          return 'October'
        case 11:
          return 'November'
        case 12:
          return 'December'
        default:
          return
      }
    }
    let dateWithoutTime = (monthString(month) + ' ' + newDate.getFullYear())
    return dateWithoutTime;
  }

  const handleChange = (e) => {
    props.setUpdateForm(e.target.name, e.target.value)
  }

  const handleSubmitUpdate = async (e) => {
    e.preventDefault()
    await props.sendUpdates(authState.thisUser, {
      email: userState.updateUser.email || userState.thisUsersInfo.email,
      userName: userState.updateUser.userName || userState.thisUsersInfo.userName,
      preferredName: userState.updateUser.preferredName || userState.thisUsersInfo.preferredName,
      zipCode: userState.updateUser.zipCode || userState.thisUsersInfo.zipCode,
      zodiac: userState.updateUser.zodiac || userState.thisUsersInfo.zodiac,
      image: userState.updateUser.image || userState.thisUsersInfo.image,
      banner: userState.updateUser.banner || userState.thisUsersInfo.banner,
      bio: userState.updateUser.bio || userState.thisUsersInfo.bio
    })
    props.history.push('/profile')
    toggleEdit(e)
  }

  const toggleEdit = (e) => {
    e.preventDefault()
    let editarea = document.querySelector('.profile-edit-user')
    let startEdit = document.querySelector('.profile-editbtn')
    let endEdit = document.querySelector('.profile-editbtn-off')
    let submit = document.querySelector('.profile-editbtn-submit')
    if (editarea.classList.contains('hide-form')) {
      editarea.classList.remove('hide-form')
      editarea.classList.add('show-form')
      startEdit.classList.remove('show-button')
      startEdit.classList.add('hide-button')
      endEdit.classList.remove('hide-button')
      endEdit.classList.remove('hide-button')
      submit.classList.add('show-button')
      submit.classList.add('show-button')
    } else if (editarea.classList.contains('show-form')) {
      editarea.classList.add('hide-form')
      editarea.classList.remove('show-form')
      startEdit.classList.add('show-button')
      startEdit.classList.remove('hide-button')
      endEdit.classList.add('hide-button')
      endEdit.classList.add('hide-button')
      submit.classList.remove('show-button')
      submit.classList.remove('show-button')
    }
  }

  return (
    <>
      <div className="profile-detail-box">
        <div className="profile-editbtn-box">
          <button className="profile-editbtn" onClick={ toggleEdit }>Edit Profile</button>
          <button className="profile-editbtn-submit hide-button" onClick={ handleSubmitUpdate }>Submit Changes</button>
          <button className="profile-editbtn-off hide-button" onClick={ toggleEdit }>Cancel Edit</button>
        </div>
        <div className="profile-details">
          { (user.createdAt) ? (<h6>journaling since { changeDate(user.createdAt) }</h6>) : (null) }
          { (user.zipCode && user.zipCode !== 0) ? (<h6>keeping their mind clear in { getState(user.zipCode) }</h6>) : (null) }
        </div>
      </div>
      <div className="profile-edit-user hide-form">

        <form className="profile-edit-user-form">
          <h6>Preferred Name:</h6>
          <input
            type="text"
            name="preferredName"
            onInput={ (e) => {
              e.target.value = (e.target.value).slice(0, 18)
            } }
            placeholder={ user.preferredName }
            onChange={ handleChange }
          />
          <h6>Username:</h6>
          <input
            type="text"
            name="userName"
            onInput={ (e) => {
              e.target.value = (e.target.value).slice(0, 18)
            } }
            placeholder={ user.userName }
            onChange={ handleChange }
          />
          <h6>Email Address:</h6>
          <input
            type="text"
            name="email"
            placeholder={ user.email }
            onChange={ handleChange }
          />
          <h6>Zipcode:</h6>
          <input
            type="number"
            name="zipCode"
            onInput={ (e) => {
              e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 5)
            } }
            onChange={ handleChange }
            placeholder={ user.zipCode }
          />
          <h6>Zodiac:</h6>
          <select name="zodiac"
            value={ user.zodiac }
            onChange={ handleChange }
          >
            <option></option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Don't know/Don't care">Don't know/Don't care</option>
          </select>
          <h6>Avatar Image:</h6>
          <input
            type="text"
            name="image"
            placeholder={ user.image }
            onChange={ handleChange }
          />
          <h6>Profile Banner Image:</h6>
          <input
            type="text"
            name="banner"
            placeholder={ user.banner }
            onChange={ handleChange }
          />
          <h6>Bio:</h6>
          <textarea
            type="text"
            name="bio"
            value={ userState.updateUser.bio }
            rows="10"
            maxLength="2000"
            onChange={ handleChange }
          />
        </form>

      </div>
    </>

  )
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails)
