import axios from 'axios'

axios.create({
  baseURL: "http://localhost:3333/"
})

export const Signup = async (username:string, password:string, hierarquia:string) => {
  
  try {
    const response = await axios.post('http://192.168.4.185:3333/signup', {
      username: username,
      password: password, 
      hierarquia: hierarquia
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
export const getAllUsers = async (hierarquia:string) => {
  
  try {
    const response = await axios.post('http://192.168.4.185:3333/getUserByHierarquia', {
     hierarquia
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}



export const ApagaPessoa = async (username:string) => {
  
  try {
    const response = await axios.post('http://192.168.4.185:3333/deleteuser', {
      username: username,
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}