import API from './'
import { BASE_URL } from '../globals';
import axios from 'axios';


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

export const __CheckSession = async () => {
  try {
    const res = await axios.get(`${BASE_URL}auth/session`)
    return res.data
  } catch (error) {
    throw error;
  }
};