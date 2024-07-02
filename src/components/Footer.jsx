import {
  Flex,
  Heading,
  Box,
  Stack,
  HStack,
  VStack,
  Divider,
  Image,
  Text
} from "@chakra-ui/react";
import logoSistemas from "../assets/img/logo_vertical_Sistemas.png";
import logoUFPS from "../assets/img/logoUFPS.png";
import { Link } from "wouter";

function Footer() {
  return (
    <footer className="page-footer">
      <Box marginTop={35} marginInline="auto" w="80%" h="90%">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box maxW="300px">
            <HStack spacing="25px" alignContent="center">
              <Image src={logoUFPS} alt="Logo UFPS" w="50%" borderRadius="md" />
              <Image
                src={logoSistemas}
                alt="Logo Sistemas"
                w="35%"
                borderRadius="md"
              />
            </HStack>
          </Box>
          <HStack
            spacing={4}
            d={{ base: "none", sm: "flex" }}
            justifyContent={{ sm: "space-between", md: "normal" }}
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontSize="md" fontWeight="bold">
                Pages
              </Text>
              <VStack spacing={2} alignItems="flex-start" color="gray.500">
                <Link href="/algorithm">
                  <Text color="gray.500">Algorithm</Text>
                </Link>
                <Link href="/complexity">
                  <Text color="gray.500">Complexity</Text>
                </Link>
                <Link href="/contact">
                  <Text color="gray.500">Contact</Text>
                </Link>
              </VStack>
            </VStack>
          </HStack>
        </Stack>
        <Divider my={4} />
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Text fontSize="md"></Text>
          <Flex
            as="footer"
            py={8}
            w="90%"
            mx="auto"
            maxW="container.xl"
            justifyContent="center"
          >
            <Heading size="sm">
              © {new Date().getFullYear()} - Analisis de Algoritmos
            </Heading>
          </Flex>
        </Stack>
      </Box>
    </footer>
  );
}

export default Footer;
