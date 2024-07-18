import { Box, Button, Flex, Input } from "@chakra-ui/react";
import {useForm} from 'react-hook-form'

export function ConsultaCida(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data)
  }
  return (
    <Flex w={'100vw'}>
      <Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={2}>
              <Input type="number" placeholder="Digite Numero Beneficio" bg={'gray.200'} border={'none'} {...register('numeroBeneficio')}/>
              <Button bg={'#e1e1de'} boxShadow={'1px 1px 1px 0px black'} fontWeight={'normal'} color={'purple.900'} _hover={{background: "#a2acc6f4", shadow:"3px 2px 3px 0px gray"}} type="submit">Enviar</Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}