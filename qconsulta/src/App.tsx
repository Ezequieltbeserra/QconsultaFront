import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { AiOutlineLogin } from "react-icons/ai";
import {useForm} from 'react-hook-form'
import { Signin } from "./apis/Usuarios/request";
import { decodificator } from "./apis/decodejwt";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Load from "./components/loading/loading";



export default function App() {
  const navigate = useNavigate(); // Usando useNavigate para redirecionamento
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => {
   const signinApi = await Signin(
    data.username,
    data.password
   )
  const deco = decodificator(signinApi)
  console.log(deco)
  localStorage.setItem("username", deco["username"])
  localStorage.setItem("hierarquiaName", deco['hierarquiaName'])
  
  console.log(deco)
   if(deco && signinApi !== 'usuario não existe') {
    navigate('/consulta')
   }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento inicial
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula um carregamento de 2 segundos
  }, []);

  return (
    <>
     {loading ? (
        <Load />
      ) : (
        <Flex bg={'gray.600'} flexDir={'column'} justify={'center'} h={"100vh"} align={'center'}>
      <Box mt={10} mb={10}>
        <Text color={"white"} fontSize={'2em'}>Qconsulta</Text>
      </Box>
      <Flex>
        <Box  >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={2}>
              <Input  bg={'gray.400'} placeholder="Nome de usuario" border={'none'} borderRadius={'15px'} {...register("username")}/>
            </Box>
            <Box>
              <Input type="password" bg={'gray.400'} placeholder="Senha"  border={'none'} borderRadius={'15px'} {...register("password")} />
            </Box>
            <Flex justify={'center'} mt={2}>
              <Button bg={'transparent'} color={'green.400'} fontWeight={'normal'} _hover={{background: "green.400", color: "black"}} type="submit"> <Icon as={AiOutlineLogin} fontSize={'20px'}/>Entrar</Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Flex>
      )}
    
    </>
  )
}