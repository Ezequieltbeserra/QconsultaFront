import { Box, Flex, Grid, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Busca } from "../components/inputBusca";
import Qualiconsig from '../Qualiconsig.png';
import { useEffect, useState } from "react";
import { getCredits } from "../apis/Usuarios/getCredits";

export default function Consultas() {
  const bgColor = useColorModeValue('blue.600', 'gray.800');
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('white', 'white');
  const [username, setUsername] = useState<any>()
  const [cargo, setCargo] = useState<any>()
  const [creditsCidam, setCreditsCida] = useState<string>()

  const getCreditsUser = async () => {
    return await getCredits(localStorage.getItem("username"))
  }

  useEffect(() => {
    setUsername(localStorage.getItem("username"))
    setCargo(localStorage.getItem("hierarquiaName"))
    getCreditsUser()
},[])

  return (
    <Flex  w={"100vw"} bgGradient='linear(to-r, blue.600, blue.700)' minH="100vh" direction="column" alignItems="center" pt={10}>
      <Flex w="95vw" justify="space-between" align="center"   mb={6}>
        <Box>
          <Image src={Qualiconsig} />
        </Box>
        <Flex align="center" textColor={textColor}>
          <Text mr={2}>Username:</Text>
          <Text fontWeight="bold" mr={4}>{username}</Text>
          <Text mr={2}>Cargo:</Text>    
          <Text fontWeight="bold" mr={4}>{cargo}</Text>
        </Flex>
        
      </Flex>
      <Flex w={"95vw"} margin={'0 auto'} h={'100%'} align={'center'}>
        <Box w="100%">
          <Flex justify="center" align={'center'}>
            <Box p={6} borderRadius="lg"  w="full">
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                gap="40px"
              >
                <Busca title={"Consulta Cida"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"cida"} isActive={true}/>
                <Busca title={"Consulta Lemmit"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"lemmit"}isActive={false}  />
                <Busca title={"Consulta In100"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"in100"}isActive={false}  />
                <Busca title={"Consulta Top"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"top"} isActive={false}  />
                <Busca title={"Consulta Nova Vida"} type={'number'} placeholder={"Digite Número Benefício"} toApi={"sla"} isActive={false} />
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
