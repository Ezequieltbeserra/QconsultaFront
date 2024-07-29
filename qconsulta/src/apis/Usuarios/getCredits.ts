import axios from "axios"

export const getCredits = async (username:string) => {
  
  try {
    const response = await axios.post('http://192.168.4.185:3333/getCredits', {
      username: username,
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}

export const adicionaCredito = async (username:string, api:string, credits:string) => {
  
  try {
    const response = await axios.patch('http://192.168.4.185:3333/addCredits', {
      username,
      api,
      credits
    })
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
 
}