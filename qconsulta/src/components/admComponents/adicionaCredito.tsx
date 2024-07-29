import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { adicionaCredito } from "../../apis/Usuarios/getCredits";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export const AddCredits = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [responseCre, setResponse] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    console.log(data);
    const addcredits = await adicionaCredito(
      data.username,
      data.api,
      data.credits
    );
    if (addcredits) {
      setResponse(addcredits);
    }
  };

  useEffect(() => {
    if (responseCre) {
      const timer = setTimeout(() => {
        setResponse(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [responseCre]);

  return (
    <Flex align={'center'} flexDir={'column'} mr={'10px'} ml={'10px'} w={'50%'} margin={'0 auto'}  mb={2} boxShadow='md' p={4}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={"column"}>
            <Text textAlign={'center'}fontSize={18} fontWeight={'bold'}>Adicionar créditos</Text>
            <Box mb={2}>
              <Input placeholder="Nome do usuário" bg={"gray.300"} {...register("username")} />
            </Box>
            <Box>
              <Input placeholder="Quantidade de créditos" bg={"gray.300"} type="number" {...register("credits")} />
            </Box>
            <Box mt={'15px'}>
              <Select placeholder='Selecione a API para recarregar' border={'none'} cursor={'pointer'} bg={'#bfd8f553'} shadow={'1px 1px 5px #ccebff86'} {...register("api")}>
                <option value='cida'>Cida</option>
                <option value='in100'>In100</option>
                <option value='lemmit'>Lemmit</option>
                <option value='top'>Top Consulta</option>
              </Select>
            </Box>
            <Box mt={2}>
              <Button fontWeight={'500'} bg={'#d3d7ea1fc'} _hover={{ background: '#d9dbe520c' }} type="submit">Cadastrar</Button>
            </Box>
          </Flex>
        </form>
      </Box>
      {responseCre && (
        <Text fontWeight={'bold'}>{responseCre}</Text>
      )}
    </Flex>
  );
};
