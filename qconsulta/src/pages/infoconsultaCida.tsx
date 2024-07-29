import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import PdfDocument from '../components/gerarPdfCida/dowload';
import { Box, Button, Flex, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, Link } from '@chakra-ui/react';
import qualiconsig from '../Qualiconsig.png';
import { useLocation } from 'react-router-dom';

const Information = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [username, setUsername] = useState('');
  const [cargo, setCargo] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setUsername(localStorage.getItem("username") || '');
    setCargo(localStorage.getItem("hierarquiaName") || '');
  }, []);
  const location = useLocation();
  const { resultado } = location.state;
  
  
  const handleGeneratePdf = async () => {
    const doc = pdf(<PdfDocument dados={resultado} />);
    const blob = await doc.toBlob();
    setPdfBlob(blob);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Flex bg={'gray.200'} h={'100vh'} flexDir={'column'}>
      <Flex justifyContent={'space-between'} align={'center'}>
        <Flex>
          <Link href="/consulta">
          <Box>
            
            <Image src={qualiconsig} />
          </Box>
          </Link>
        </Flex>
        <Flex>
          <Flex>
            <Text mr={2}>Username:</Text>
            <Text fontWeight="bold" mr={4}>{username}</Text>
            <Text mr={2}>Cargo:</Text>
            <Text fontWeight="bold" mr={4}>{cargo}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex align={'center'} justify={'center'} mt={4}>
        <Button onClick={handleGeneratePdf} bg={'blue.500'} color={'gray.200'} _hover={{ bg: 'blue.600', color: 'gray.100' }}>Gerar PDF</Button>
        {pdfBlob && (
          <Link href={URL.createObjectURL(pdfBlob)} download={resultado.listaDadosBancarios[0].numeroBeneficio} ml={4}>
            Baixar PDF
          </Link>
        )}
        {pdfBlob &&
        <Button onClick={openModal} ml={4}>Pré visualização do pdf</Button>
        }
        </Flex>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} size="full">
        <ModalOverlay />
        <ModalContent maxW="90%" maxH={"80%"}>
          <ModalHeader>Pré visualização do PDF</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Conteúdo da pré-visualização aqui */}
            <iframe
              src={pdfBlob && URL.createObjectURL(pdfBlob)  }
              title="Pré visualização do PDF"
              width="100%"
              height="700px"
              style={{ border: 'none' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Information;
