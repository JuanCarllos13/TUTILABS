import axios from 'axios'

//  minha chave bc1843a2

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=bc1843a2&s='

})

export default api
