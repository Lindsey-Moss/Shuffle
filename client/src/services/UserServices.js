import API from './'

export const GetUser = async (userID) => {
  try {
    const res = await API.get(`users/id/${userID}`)
    return res.data   
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (userID, userForm) => {
  try {
    const res = await API.put(`users/${userID}`, userForm)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (userID) => {
  try {
    await API.delete(`users/${userID}`)
    console.log(`User deleted successfully.`)
    return
  } catch (error) {
    throw error
  }
}