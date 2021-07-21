import API from './'

export const GetAllUsersEntries = async (userID) => {
  try {
    const res = await API.get(`journal/${userID}/all`)
    return res.data   
  } catch (error) {
    throw error
  }
}

export const GetDailyDrawToday = async (userID) => {
  try {
    const res = await API.get(`journal/isDaily/${userID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetFilteredEntries = async (userID, string) => {
  try {
    const res = await API.get(`journal/${userID}/filter/${string}`)
    return res.data   
  } catch (error) {
    throw error
  }
}

export const GetIconEntries = async (userID, icon) => {
  try {
    const res = await API.get(`journal/${userID}/by/${icon}`)
    return res.data   
  } catch (error) {
    throw error
  }
}


export const PostNewEntry = async (userID, entryForm) => {
  try {
    const res = await API.post(`journal/${userID}`, entryForm)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateEntry = async (userID, entryID, entryForm) => {
  try {
    const res = await API.put(`journal/${userID}/${entryID}`, entryForm)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteEntry = async (userID, entryID) => {
  try {
    await API.delete(`journal/${userID}/${entryID}`)
    console.log(`Entry #${entryID} deleted successfully.`)
    return
  } catch (error) {
    throw error
  }
}