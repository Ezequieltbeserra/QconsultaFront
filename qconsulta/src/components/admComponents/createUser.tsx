import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Selected } from "../../utils/select";

export const CreateUser = () => {
  
  return (
    <Box>
      <Box>
        <form>
          <Flex flexDir={"column"}>
            <Box mb={2}>
              <Input placeholder="Nome do usuario" bg={"gray.300"} />
            </Box>
            <Box>
              <Input placeholder="Senha" bg={"gray.300"} />
            </Box>
            <Box mt={'10px'}>
              <Selected />
            </Box>
            <Box mt={2}>
              <Button fontWeight={'500'} bg={'#d3d7ea1fc'} _hover={{background: '#d9dbe520c'}}>Cadastrar</Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};
