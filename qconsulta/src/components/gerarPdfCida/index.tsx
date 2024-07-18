import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

export const GerarPdfCida = () => {
  return (
    <Flex>
      <Box width="100%">
        <Box p={4}>
          <Text textAlign="center" mb={4} fontSize="xl">Emprestimos Bancarios</Text>
          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Contrato</Th>
                  <Th>Banco</Th>
                  <Th>Data Inclusao</Th>
                  <Th>Inicio Desconto</Th>
                  <Th>Fim Desconto</Th>
                  <Th>Situação</Th>
                  <Th>Qtd. Parcelas</Th>
                  <Th>Valor Emprestado</Th>
                  <Th>Valor Liberado</Th>
                  <Th>Valor Parcela</Th>
                  <Th>Saldo Devedor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
                {/* Aqui você pode adicionar mais linhas conforme necessário */}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Flex>
  );
};
