import { Box, Flex } from "@chakra-ui/react"
import { CreateUser } from "../components/admComponents/createUser"
import { AddCredits } from "../components/admComponents/adicionaCredito"


export const Administrador = () => {

  return (
    <Box w={'100vw'} h={'100vh'} bgGradient='linear(to-r, #003cff8a, #8181ca69)'>
      <Flex w={'90vw'} margin={'0 auto'} >
        <Box mt={'20px'}>
        <Box w={'100%'} borderRadius={'10px'} boxShadow={'1px 2px 10px white'} p={2} display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <CreateUser/>
          <AddCredits/>
        </Box>
        </Box>
      </Flex>
    </Box>
  )
}