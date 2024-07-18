import axios from 'axios'

axios.create({
  baseURL: "http://localhost:2221/"
})

export const ConsultaCida = async (numerobeneficio:string, howIsRequested:string, username:string) => {
  try {
    const response = await axios.post('http://192.168.4.185:3333/createCida', {
      numeroBeneficio:numerobeneficio,
      howIsRequested,
      username  
    })
    console.log(response.data)
    return response.data
  } catch (err) {
    console.log(err)
    return 'Não foi possivel fazer a busca'
  }
}