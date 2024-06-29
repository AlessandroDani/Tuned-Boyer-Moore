import {
  Flex,
  Heading,
  Box,
  Stack,
  HStack,
  Divider,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import logoSistemas from "../assets/images/logo_vertical_ingenieriaSistemas.png";
import logoUFPS from "../assets/images/Logo-nuevo-vertical.png";

function Footer() {
  return (
    <footer className="page-footer">
      <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
        <Stack
          spacing={{ base: 8, md: 0 }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box maxW="300px">
            <HStack spacing="25px">
              <Image
                src={logoUFPS}
                alt="Logo UFPS"
                w="150px"
                h="auto"
                borderRadius="md"
              />
              <Image
                src={logoSistemas}
                alt="Logo Sistemas"
                w="125px"
                h="auto"
                borderRadius="md"
              />
            </HStack>
          </Box>
          <HStack
            spacing={4}
            d={{ base: "none", sm: "flex" }}
            justifyContent={{ sm: "space-between", md: "normal" }}
          >
            <Box display='flex' flexDir='column' gap={4} h='100%'>
              <Text fontSize="md" fontWeight="bold">
                Pages
              </Text>
                <Link href="/algorithm" color='gray.500'>Algorithm</Link>
                <Link href="/complexity" color='gray.500'>Complexity</Link>
                <Link href="/contact" color='gray.500'>Contact</Link>
            </Box>
            <Box display='flex' flexDir='column' gap={4} h='100%'>
              <Text fontSize="md" fontWeight="bold">
                Contact
              </Text>
                <Link href="#" color='gray.500' >Twitter</Link>
                <Link href="#" color='gray.500' >LinkedIn</Link>
                <Link href="#" color='gray.500' >Instagram</Link>
            </Box>
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
