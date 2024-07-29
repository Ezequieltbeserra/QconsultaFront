import { Box, Flex, Grid, GridItem, Icon, Link, Text } from "@chakra-ui/react";
import { CreateUser } from "../components/admComponents/createUser";
import { AddCredits } from "../components/admComponents/adicionaCredito";
import { DeleteUser } from "../components/admComponents/deleteUser";
import { GetAll } from "../components/admComponents/pegartodosporarea";
import { IoIosArrowBack } from "react-icons/io";

export const Administrador = () => {
  return (
    <Box w="100vw" bgGradient="linear(to-r, #003cffbc, #276ff5c3)">
      <Flex w={"100px"} h={'50px'} align={'center'}  position={"absolute"} zIndex={"999"} justify={'center'}>
        <Link
        
          href="/consulta"
          style={{
            textDecoration: 'none'
          }}
          display={"flex"}
          alignContent={"center"}
          textAlign={"center"}
          alignItems={'center'}
          textDecorationLine={'none'}
          textDecor={'none'}
          fontSize={20}
          bg={'blue.200'}
         p={'5px'}
        
          color={'white'}
          _hover={{
            background: 'blue.400'
          }}
          
        >
          <Icon
            as={IoIosArrowBack}
            display={'flex'}
            textAlign={"center"}
            alignContent={"center"}
            justifyContent={"center"}
          />{" "}
          <Text textAlign={"center"} align={"center"} textDecoration={'none'}>
            Voltar
          </Text>{" "}
        </Link>
      </Flex>
      <Flex w="90vw" margin="0 auto" h="100%">
        <Box mt="20px" w="100%">
          <Grid
            templateColumns="1fr 2fr"
            gap={6}
            borderRadius="10px"
            boxShadow="1px 2px 10px white"
            p={2}
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            h="100%"
          >
            <GridItem
              colSpan={[2, 1]}
              display="flex"
              flexDirection="column"
              gap={4}
            >
              <Box>
                <CreateUser />
              </Box>
              <Box>
                <AddCredits />
              </Box>
              <Box>
                <DeleteUser />
              </Box>
            </GridItem>
            <GridItem colSpan={[2, 1]} h="100%">
              <GetAll />
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};
