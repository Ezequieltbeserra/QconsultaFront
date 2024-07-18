import { Box, Button, Flex, Input, Select } from "@chakra-ui/react"


export const AddCredits = () => {

  return (
    <Flex align={'center'} flexDir={'column'} ml={'10px'}> 
      <Box>
        <form>
          <Flex flexDir={"column"}>
            <Box mb={2}>
              <Input placeholder="Nome do usuario" bg={"gray.300"} />
            </Box>
            <Box>
              <Input placeholder="Quantidade de creditos" bg={"gray.300"} type="number" />
            </Box>
            <Box mt={'15px'}>
            <Select placeholder='Selecione a api para recarregar' border={'none'} cursor={'pointer'}>
              <option value='option1'>Cida</option>
              <option value='option2'>In100</option>
              <option value='option3'>Lemmit</option>
              <option value='option3'>Top Consulta</option>
            </Select>
            </Box>
            <Box mt={2}>
              <Button fontWeight={'500'} bg={'#d3d7ea1fc'} _hover={{background: '#d9dbe520c'}}>Cadastrar</Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}