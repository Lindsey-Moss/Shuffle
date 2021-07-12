import API from './'

export const GetSomething = async () => {
  try {
    const res = await API.get('/something')
    return res.data   //// probably
  } catch (error) {
    throw error
  }
}

export const GetSomethingBySomething = async (argument) => {
  try {
    const res = await API.get(`/something/${argument}`)
    return res.data.Something
  } catch (error) {
    throw error
  }
}