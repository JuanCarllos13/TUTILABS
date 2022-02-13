import axios from 'axios'

//  minha chave bc1843a2

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/'

})

export default api
