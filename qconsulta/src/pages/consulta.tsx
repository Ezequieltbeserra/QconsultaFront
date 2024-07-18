import { useState } from "react";
import { Box, Button, Flex, Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import { ConsultaCida } from "../components/consultCida";
import { ConsultaIn100 } from "../components/consultaIn100";
import { ConsultaLemmit } from "../components/consultLemmit";
import CustomModal from "../components/modal/modalPreview";
import { GerarPdfCida } from '../components/gerarPdfCida';
import { IoIosRadioButtonOn } from "react-icons/io";

export default function Consultad() {
  const [selectedConsulta, setSelectedConsulta] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const renderSelectedConsulta = () => {
    switch (selectedConsulta) {
      case "top":
        return <ConsultaCida />;
      case "cida":
        return <ConsultaCida />;
      case "in100":
        return <ConsultaIn100 />;
      case "lemmit":
        return <ConsultaLemmit />;
      default:
        return <p>Selecione uma consulta.</p>;
    }
  };

  return (
    <Flex w={"100vw"}>
      <Box w={"90vw"} margin={"0 auto"} mt={"20px"}>
        <Box>
          <Flex justify={"center"}>
            <UnorderedList
              textDecoration={"none"}
              style={{ listStyle: "none" }}
              gap={"10"}
              display={"flex"}
            >
              <ListItem
                onClick={() => setSelectedConsulta("top")}
                cursor={'pointer'}
                color={selectedConsulta === "top" ? 'blue.400' : 'black'}
                _hover={{color:'blue.400'}}
              >
                Consultar Top
              </ListItem>
              <ListItem
                onClick={() => setSelectedConsulta("cida")}
                cursor={'pointer'}
                color={selectedConsulta === "cida" ? 'blue.400' : 'black'}
                _hover={{color:'blue.400'}}
              >
                Consultar Cida
              </ListItem>
              <ListItem
                onClick={() => setSelectedConsulta("in100")}
                cursor={'pointer'}
                color={selectedConsulta === "in100" ? 'blue.400' : 'black'}
                _hover={{color:'blue.400'}}
              >
                Consultar In100
              </ListItem>
              <ListItem
                onClick={() => setSelectedConsulta("lemmit")}
                cursor={'pointer'}
                color={selectedConsulta === "lemmit" ? 'blue.400' : 'black'}
                _hover={{color:'blue.400'}}
              >
                Consultar Lemmit
              </ListItem>
            </UnorderedList>
          </Flex>
        </Box>
        <Flex flexDir={'column'} gap={'40vh'}>
          <Box>
            {renderSelectedConsulta()}
          </Box>
          <Button w={'20%'} h='70px' margin={'0 auto'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDir={'column'} onClick={handleOpen} gap={2} p={'22px'}>Visualizar Pdf<Icon as={IoIosRadioButtonOn}/></Button>
          <CustomModal isOpen={isOpen} onClose={handleClose} title="Visualização cida">
          <p><GerarPdfCida/></p>
          </CustomModal>
          </Flex>
      </Box>
    </Flex>
  );
}
