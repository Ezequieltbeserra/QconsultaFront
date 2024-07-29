import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Selected } from "../../utils/select";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Signup } from "../../apis/Usuarios/request";
import { useState } from "react";
import { LoadingCreate } from "../../utils/loadingCreate";

export const CreateUser = () => {
  const [informacao, setInformacao] = useState<any>();
  const [loading, setLoading] = useState(false);
  const methods = useForm<any>();
  const { register, handleSubmit, reset, formState: { errors } } = methods;
  
  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    const signinApi = await Signup(data.username, data.password, data.role);
    console.log(signinApi);
    setInformacao(signinApi);
    setLoading(false);
    reset();

    setTimeout(() => {
      setInformacao('');
    }, 4000);
  };

  return (
    <Box w={'50%'} margin={'0 auto'} mt={10} mb={10} boxShadow='md' p={4}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={"column"}>
            <Text textAlign={'center'} fontSize={18} fontWeight={'bold'}>Criar usuario</Text>
            <Box mb={2}>
              <Input placeholder="Nome do usuario" bg={"gray.300"} {...register('username')}/>
            </Box>
            <Box>
              <Input placeholder="Senha" bg={"gray.300"} {...register('password')} />
            </Box>
            <Box mt={'10px'}>
              <Selected />
            </Box>
            <Box mt={2}>
              <Button type="submit" fontWeight={'500'} bg={'#d3d7ea1fc'} _hover={{background: '#d9dbe520c'}}>Cadastrar</Button>
            </Box>
          </Flex>
        </form>
      </FormProvider>
      {informacao && (
        <Text
          textColor={informacao === "Não foi possivel fazer a busca" ? 'red.700' : 'green.800'}
          fontWeight={'bold'}
        >
          {informacao}
        </Text> 
      )}
      {loading && (
        <Box>
          <LoadingCreate />
        </Box>
      )}
    </Box>
  );
};
