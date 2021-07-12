import Axios from 'axios'
import { BASE_URL} from '../globals'

const API = Axios.create({ baseURL: BASE_URL })

export default API