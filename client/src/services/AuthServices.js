import API from './'

export const SignUp = async (authForm) => {
  try {
    const res = await API.post('/auth/register', authForm)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LogIn = async (authForm) => {
  try {
    const res = await API.post('/auth/login', authForm)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (error) {
    throw error
  }
}