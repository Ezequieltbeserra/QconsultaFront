import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import PdfDocumentTop from '../components/gerarpdfTop/dowload';
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link
} from '@chakra-ui/react';
import qualiconsig from '../Qualiconsig.png';
import { useLocation } from 'react-router-dom';

const InformationTop = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [username, setUsername] = useState('');
  const [cargo, setCargo] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  const { resultado } = location.state;

  useEffect(() => {
    setUsername(localStorage.getItem("username") || '');
    setCargo(localStorage.getItem("hierarquiaName") || '');
  }, []);

  const handleGeneratePdf = async () => {
    if (!resultado) {
      console.error("Dados do resultado não estão disponíveis.");
      return;
    }
    try {
      const doc = pdf(<PdfDocumentTop dados={resultado[0]} />);
      const blob = await doc.toBlob();
      setPdfBlob(blob);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Flex bg={'gray.200'} h={'100vh'} flexDir={'column'}>
      <Flex justifyContent={'space-between'} align={'center'} p={4}>
        <Link href="/consulta">
          <Box>
            <Image src={qualiconsig} alt="Qualiconsig" />
          </Box>
        </Link>
        <Flex>
          <Text mr={2}>Username:</Text>
          <Text fontWeight="bold" mr={4}>{username}</Text>
          <Text mr={2}>Cargo:</Text>
          <Text fontWeight="bold">{cargo}</Text>
        </Flex>
      </Flex>
      {resultado[1] !== "Dados puxados do banco de dados" &&
      <Text
      color={"yellow.400"}
      >
       {resultado[1]}
      </Text>
      }
       {resultado[1] === "Dados puxados do banco de dados" &&
      <Text
      color={"green.400"}
      >
       {resultado[1]}
      </Text>
      }
      <Flex align={'center'} justify={'center'} mt={4}>
        <Button
          onClick={handleGeneratePdf}
          bg={'blue.500'}
          color={'gray.200'}
          _hover={{ bg: 'blue.600', color: 'gray.100' }}
        >
          Gerar PDF
        </Button>
       
        {pdfBlob && (
          <>
            <Link
              href={URL.createObjectURL(pdfBlob)}
              download={resultado.listaDadosBancarios?.[0]?.numeroBeneficio || 'documento'}
              ml={4}
            >
              Baixar PDF
            </Link>
            <Button onClick={openModal} ml={4}>Pré-visualização do PDF</Button>
          </>
        )}
      </Flex>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} size="full">
        <ModalOverlay />
        <ModalContent maxW="90%" maxH={"80%"}>
          <ModalHeader>Pré-visualização do PDF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Conteúdo da pré-visualização aqui */}
            {pdfBlob ? (
              <iframe
                src={URL.createObjectURL(pdfBlob)}
                title="Pré-visualização do PDF"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
              />
            ) : (
              <Text>Carregando pré-visualização...</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default InformationTop;
