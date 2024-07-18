import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react"
import { MdAttachMoney } from "react-icons/md"
import {useForm} from 'react-hook-form'
import { ConsultaCida } from "../apis/cida/request";
import { useNavigate } from 'react-router-dom';

export const Busca = ({title, placeholder, type, toApi, isActive}:any) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
   const user:any = localStorage.getItem("username")
   const cargo:any = localStorage.getItem("hierarquiaName")

    if(data.cida ){
      const toApi = ConsultaCida(data.cida, cargo, user)
      const responseCidaApi = await toApi
      navigate('/infoconsulta', { state: { resultado: responseCidaApi } });
  }
   if(data.lemmit){console.log({numeroCpf: data.lemmit})}
   if(data.top){console.log({numeroBeneficio: data.top})}
  }

  return (
    <Flex background={'#dfe6e9'} w={'105%'} p={'20px'}  borderRadius={'10px'}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Text fontSize={'20px'} fontWeight={'bold'} mb={2}>{title}</Text>
        {isActive && (<Input type={type} placeholder={placeholder} bg={'#cacdd6'} px={4} py={3} outline={'none'} w={'240px'} color={'black'} rounded={'lg'}  transition={'all ease 0.2s'} border={'2px solid #2B3040'} focusBorderColor="#596A95" {...register(toApi)} />)}
        {!isActive && (<Text>Em Breve...</Text>)}
        <Flex textAlign={'center'} align={'center'} >
          {isActive && <Text>Creditos:</Text>}
          {isActive && <Icon as={MdAttachMoney}/>}
          {isActive && <Text mt={'10px'} mb={'10px'} p={2} color={'green.500'}>20</Text>}
        </Flex>
        {isActive &&<Button ml={4} color={"#090909"} padding={'0.7em 1.7em'} fontSize={'18px'} borderRadius={"0.5em"} background={'#e8e8e8'} cursor={'pointer'} border={'1px solid #e8e8e8'} transition={'all 0.3s'} boxShadow={'6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'} _active={{color: '#666', boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff"}} type="submit">Buscar</Button>}
      </form>
    </Flex>
    
  )
}