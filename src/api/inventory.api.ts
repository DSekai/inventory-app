import axios from "axios";
const urlAPI = import.meta.env.VITE_API_URL

export const inventoryAPI = axios.create({
  baseURL: urlAPI
})

inventoryAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('tokenAPI')
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})