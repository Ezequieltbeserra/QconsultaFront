import { useState, useEffect } from 'react';
import { Box, Button, Flex, Input, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, chakra } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { getAllUsers } from '../../apis/Usuarios/request';
import { useForm } from 'react-hook-form';

const MotionBox = motion(chakra.div);

const AnimatedCheckbox = ({ isChecked, onChange }) => (
  <Box className="cntr" position="relative" bg={'#cccccc28'} color={'red'} boxShadow={'md'}>
    <Input
      type="checkbox"
      id="cbx"
      isChecked={isChecked}
      onChange={onChange}
      display="none"
    />
    <MotionBox
      as="label"
      htmlFor="cbx"
      className="cbx"
      position="relative"
      top="1px"
      width="27px"
      height="27px"
      border="1px solid"
      borderColor="#c8ccd4"
      borderRadius="3px"
      verticalAlign="middle"
      transition="background 0.1s ease"
      cursor="pointer"
      display="block"
      animate={isChecked ? { borderColor: 'transparent', backgroundColor: '#6871f1' } : {}}
      initial={false}
      whileTap={{ scale: 1.1 }}
    >
      <MotionBox
        content=""
        position="absolute"
        top="2px"
        left="8px"
        width="7px"
        height="14px"
        opacity={isChecked ? 1 : 0}
        transform={isChecked ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)'}
        borderRight="2px solid #fff"
        borderBottom="2px solid #fff"
        transition="all 0.3s ease"
        transitionDelay="0.15s"
      />
    </MotionBox>
  </Box>
);

export const GetAll = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [responseCre, setResponse] = useState<[]>([]);
  const [filteredResponse, setFilteredResponse] = useState<[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAlphabetical, setIsAlphabetical] = useState(false);

  const onSubmit = async (data: any) => {
    const getUsers = await getAllUsers(data.hierarquia);
    if (getUsers) {
      setResponse(getUsers);
      setFilteredResponse(getUsers);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      setFilteredResponse(
        responseCre.filter(user =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredResponse(responseCre);
    }
  }, [searchQuery, responseCre]);

  useEffect(() => {
    if (isAlphabetical) {
      setFilteredResponse(prev =>
        [...prev].sort((a, b) => a.username.localeCompare(b.username))
      );
    } else {
      setFilteredResponse(responseCre);
    }
  }, [isAlphabetical, responseCre]);

  return (
    <Flex align="center" flexDir="column" mr="10px" ml="10px" maxW="80%" mx="auto">
      <Box width="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir="column" bg="transparent" p={4} borderRadius="8px" boxShadow="md">
            <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={4}>Pegar Usuários</Text>
            <Box mb={4}>
              <Select
                placeholder="Selecione a Hierarquia"
                border=""
                bg="#bfd8f553"
                shadow="1px 1px 5px #ccebff86"
                cursor="pointer"
                {...register("hierarquia")}
              >
                <option value="Administrador">Administrador</option>
                <option value="Back-office">Back-office</option>
                <option value="Comercial">Comercial</option>
              </Select>
            </Box>
            <Button fontWeight="500" bg="#6871f1" color="white" _hover={{ background: '#5663d5' }} type="submit">Buscar</Button>
          </Flex>
        </form>
        {responseCre.length > 0 && (
          <Box mt={4} bg="rgba(204, 231, 247, 0.1)" p={4} borderRadius="8px" boxShadow="md" backdropFilter="blur(10px)" width="100%">
            <Flex align="center" gap={2} mb={4}>
              <Text>Filtrar por ordem alfabética</Text>
              <AnimatedCheckbox isChecked={isAlphabetical} onChange={() => setIsAlphabetical(!isAlphabetical)} />
            </Flex>
            <Box mb={4}>
              <Input
                placeholder="Buscar por nome"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="whiteAlpha.500"
              />
            </Box>
            <Box maxH="400px" overflowY="auto" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" p={4} borderRadius="8px">
              <TableContainer>
                <Table >
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>Cida</Th>
                      <Th>Top</Th>
                      <Th>In100</Th>
                      <Th>Lemmit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredResponse.map((pessoa, index) => (
                      <Tr key={index}>
                        <Td fontWeight="bold">{pessoa.username}</Td>
                        <Td>{pessoa.CidaCredits}</Td>
                        <Td>{pessoa.TopCredits}</Td>
                        <Td>{pessoa.In100Credits}</Td>
                        <Td>{pessoa.LemmitCredits}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
