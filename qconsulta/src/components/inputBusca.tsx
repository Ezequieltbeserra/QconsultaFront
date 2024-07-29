import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react"
import { MdAttachMoney } from "react-icons/md"
import { useForm } from 'react-hook-form'
import { ConsultaCida, ConsultaTop } from "../apis/cida/request";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getCredits } from "../apis/Usuarios/getCredits";

export const Busca = ({ title, placeholder, type, toApi, isActive, setLoading }: any) => {
  const [error, setError] = useState(false)
  const [messageErro, setMessageErro] = useState()
  const [credits, setCredits] = useState<{ CidaCredits?: number; lemmitCredits?: number; In100Credits?: number; TopCredits?: number }>({})
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    setLoading(true); // Inicia o loading
    try {
      const user: any = localStorage.getItem("username")
      const cargo: any = localStorage.getItem("hierarquiaName")

      if (data.cida) {
        const responseCidaApi = await ConsultaCida(data.cida, cargo, user);
        if (responseCidaApi.status === 500) {
          setError(true)
          return 
        }
        
        if (!responseCidaApi) {
          setError(true)
          return 
        }
        
        if (responseCidaApi.erro) {
          setError(true)
        
          return 
        }
        navigate('/infoconsulta', { state: { resultado: responseCidaApi }});
      }
      if (data.lemmit) { console.log({ numeroCpf: data.lemmit }) }
      if (data.top) { 
        const responseTop = await ConsultaTop(data.top, cargo, user);
        if (responseTop.status === 500) {
          setError(true)
          return 
        }
        if (!responseTop) {
          setError(true)
          return 
        }
        if (responseTop.erro) {
          setMessageErro(responseTop.erro)
          setError(true)
          
          return 
        }
        navigate('/infoconsultatop', { state: { resultado: responseTop }});
      }
      
    } catch (error) {
    } finally {
      setLoading(false); // Termina o loading
    }
  }

  const getValues = async () => {
    const user: any = localStorage.getItem("username")
    const getcc = await getCredits(user)
    setCredits(getcc) // Defina os valores de créditos
  }

  useEffect(() => {
    getValues()
  }, [])

  const getCreditValue = () => {
    switch (title) {
      case "Consulta Cida":
        return credits.CidaCredits;
      case "Consulta Lemmit":
        return credits.lemmitCredits;
      case "Consulta In100":
        return credits.In100Credits;
      case "Consulta Top":
        return credits.TopCredits;
      default:
        return null;
    }
  }

  return (
    <Flex background={'#dfe6e9'} w={'105%'} p={'20px'} borderRadius={'10px'}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Text fontSize={'20px'} fontWeight={'bold'} mb={2}>{title}</Text>
        {isActive && (<Input type={type} placeholder={placeholder} bg={'#cacdd6'} px={4} py={3} outline={'none'} w={'240px'} color={'black'} rounded={'lg'} transition={'all ease 0.2s'} border={'2px solid #2B3040'} focusBorderColor="#596A95" {...register(toApi)} />)}
        {error && (
          <Text color={'orange.500'}>{messageErro}</Text>
        )}
        {!isActive && (<Text>Em Breve...</Text>)}
        <Flex textAlign={'center'} align={'center'} >
          {isActive && <Text>Créditos: </Text>}
          {isActive && <Icon as={MdAttachMoney} />}
          {isActive && <Text mt={'10px'} mb={'10px'} p={2} color={'green.500'}>{getCreditValue() !== undefined ? getCreditValue() : "..."}</Text>}
        </Flex>
        {isActive && <Button ml={4} color={"#090909"} padding={'0.7em 1.7em'} fontSize={'18px'} borderRadius={"0.5em"} background={'#e8e8e8'} cursor={'pointer'} border={'1px solid #e8e8e8'} transition={'all 0.3s'} boxShadow={'6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'} _active={{ color: '#666', boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }} type="submit">Buscar</Button>}
      </form>
    </Flex>
  )
}
