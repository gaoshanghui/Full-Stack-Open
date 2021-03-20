import axios from 'axios'

const baseUrl = '/api/persons'

// getAll: get all people data from database
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// getAll: add a new contact into database
const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteObject = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, deleteObject, update }