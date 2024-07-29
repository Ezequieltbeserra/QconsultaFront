import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Selected } from "../../utils/select";
import { ApagaPessoa } from "../../apis/Usuarios/request";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const DeleteUser = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [responseCre, setResponse] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    console.log(data);
    const addcredits = await ApagaPessoa(
      data.username,
    );
   
  };

  return (
    <Box w={'50%'} margin={'0 auto'} boxShadow='md' p={4}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={"column"}>
            <Text textAlign={'center'} fontSize={18} fontWeight={'bold'}>Deletar usuario</Text>
            <Box mb={2}>
              <Input placeholder="Nome do usuario" bg={"gray.300"} {...register("username")} />
            </Box>
            
            <Box mt={2}>
              <Button fontWeight={'500'} bg={'#d3d7ea1fc'} _hover={{background: '#d9dbe520c'}} type="submit">Apagar</Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};
