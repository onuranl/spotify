import axios from 'axios'

const api = async (method, endpoint) => {
  const baseURL = 'https://api.spotify.com/v1/' + endpoint
  return await axios[method](baseURL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.TOKEN,
    },
  })
}

export default api
