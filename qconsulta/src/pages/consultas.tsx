import { Box, Button, Flex, Grid, Icon, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Busca } from "../components/inputBusca";
import Qualiconsig from '../Qualiconsig.png';
import { useEffect, useState } from "react";
import { getCredits } from "../apis/Usuarios/getCredits";
import { ButtonLogout } from './../utils/buttonlogout/index';
import { LoadingRequest } from "../utils/loadingRequest";
import { FaUserAlt } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { PiAlienFill } from "react-icons/pi";

export default function Consultas() {
  const bgColor = useColorModeValue('blue.600', 'gray.800');
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('white', 'white');
  const [username, setUsername] = useState<any>()
  const [cargo, setCargo] = useState<any>()
  const [creditsCidam, setCreditsCida] = useState<string>()
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  const getCreditsUser = async () => {
    return await getCredits(localStorage.getItem("username"))
  }

  useEffect(() => {
    setUsername(localStorage.getItem("username"))
    setCargo(localStorage.getItem("hierarquiaName"))
    getCreditsUser()
  }, [])

  return (
    <Flex w={"100vw"} bgGradient='linear(to-r, blue.600, blue.700)' minH="100vh" direction="column" alignItems="center" pt={10}>
      <Flex w="95vw" justify="space-between" align="center" mb={6}>
        <Box>
          <Image src={Qualiconsig} />
        </Box>
        <Flex align="center" textColor={textColor} flexDir={'column'}>
          <Flex textAlign={'center'} align={'center'}>
            <Text mr={2} ><FaUserAlt /></Text>
            <Text fontWeight="bold" mr={4}>{username}</Text>
          </Flex>
          <Flex textAlign={'center'} align={'center'}>
            <Text mr={2}><HiOfficeBuilding /></Text>    
            <Text fontWeight="bold" mr={4}>{cargo}</Text>
          </Flex>
          {cargo == "Administrador" && (
          <Link href="/administrador" p={3}boxShadow={'md'} borderRadius={'5px 2px'} bg={'#f8f545d6'}>
            <Flex textAlign={'center'} align={'center'} gap={2}>
              <Icon as={PiAlienFill}/>
              <Text mr={2}>Painel de controle</Text>    
            </Flex>
          </Link>
          )}
          <Flex>
          <Box>
            <Box>
              <ButtonLogout children={'sair'}/></Box>
          </Box>
        </Flex>
        </Flex>
       
      </Flex>
      <Flex w={"95vw"} margin={'0 auto'} h={'100%'} align={'center'}>
        <Box w="100%">
          <Flex justify="center" align={'center'}>
            <Box p={6} borderRadius="lg" w="full">
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                gap="40px"
              >
                <Busca title={"Consulta Cida"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"cida"} isActive={true} setLoading={setLoading}/>
                <Busca title={"Consulta Lemmit"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"lemmit"} isActive={false} setLoading={setLoading} />
                <Busca title={"Consulta In100"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"in100"} isActive={false} setLoading={setLoading} />
                <Busca title={"Consulta Top"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"top"} isActive={true} setLoading={setLoading} />
                <Busca title={"Consulta Nova Vida"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"sla"} isActive={false} setLoading={setLoading} />
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Flex>
      {loading && (
        <Flex justify={'center'} position={'absolute'} w={'100%'} h={'80%'} margin={'0 auto'} bg={'#00000039'} align={'center'}>
          <LoadingRequest />
        </Flex>
      )}
    </Flex>
  );
}
