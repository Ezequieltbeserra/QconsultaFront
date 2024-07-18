import { Box, Button, Flex, Input } from "@chakra-ui/react";

export function ConsultaIn100() {
  return (
    <Flex w={"100vw"}>
      <Box>
        <Box>
          <form>
            <Flex gap={2}>
              <Input
                placeholder="Digite Numero Beneficio"
                bg={"gray.200"}
                border={"none"}
              />
              <Button
                bg={"#e1e1de"}
                boxShadow={"1px 1px 1px 0px black"}
                fontWeight={"normal"}
                color={"purple.900"}
                _hover={{
                  background: "#a2acc6f4",
                  shadow: "3px 2px 3px 0px gray",
                }}
              >
                Enviar
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
