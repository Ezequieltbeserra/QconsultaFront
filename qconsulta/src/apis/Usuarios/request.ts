import axios from 'axios'

axios.create({
  baseURL: "http://localhost:3333/"
})

export const Signup = async (username:string, password:string, hierarquiaId:string) => {
  
  try {
    const response = await axios.post('http://localhost:2221/signup', {
      username: username,
      password: password, 
      hierarquiaId: hierarquiaId
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}

export const Signin = async (username:string, password:string) => {
  
  try {
    const response = await axios.post('http://192.168.4.185:3333/signin', {
      username: username,
      password: password
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}
