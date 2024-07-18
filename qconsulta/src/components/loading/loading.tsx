import { motion } from "framer-motion";
import qu from '../../load.png'
import load from "../../qu.png";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function Load() {
  return (
    <Flex bgGradient='linear(to-r, blue.600, blue.700)' margin={'0 auto'} h={'100vh'} justify={"center"} flexDir={"column"} align={"center"}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Flex align={'center'} justify={'center'}>
          <motion.div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "5px",
              marginTop: '30px'            
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Image alt="carregando" src={load} />
          </motion.div>
          <Box  alignContent={'center'} textAlign={'center'} margin={'0 auto'}>
            <Image alt="Qualiconsig" src={qu} />
          </Box>
        </Flex>
      </motion.div>
    </Flex>
  );
}