import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "wouter";

function Home() {
  return (
    <>
      <Box>
        <Flex
          w="100%"
          mx="auto"
          as="header"
          maxW="container.xl"
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap={4}>
            <Image src="./logo.jpeg" alt="Logo" w="30px" />
            <Heading color="black" size="md">
              Search Pattern
            </Heading>
          </Flex>

          <Flex>
            <>
              <Box display="flex" justifyContent="space-between">
                <Button
                  padding={10}
                  color="black"
                  variant="none"
                  size="sm"
                  as={Link}
                  href="/home"
                >
                  Contact
                </Button>
                <Button
                  padding={10}
                  color="black"
                  variant="none"
                  size="sm"
                  as={Link}
                  href="/home"
                >
                  Complexity
                </Button>
                <Button
                  padding={10}
                  color="black"
                  variant="none"
                  size="sm"
                  as={Link}
                  href="/home"
                >
                  Algorithm
                </Button>
              </Box>
            </>
          </Flex>
        </Flex>
      </Box>

      <section>
        <Flex
          w="90%"
          gap={12}
          my={10}
          as="main"
          mx="auto"
          maxW="container.xl"
          alignItems="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w={{ md: "50%" }} mx="auto" textAlign="center">
            <Heading
              mb={4}
              size="xl"
              style={{
                textWrap: "balance",
              }}
            >
              Enter the text where you want <span style={{ color: "#1D5CA9" }}>to search</span> for the pattern
            </Heading>

            <Flex mt={4} gap={2} justifyContent="center" p={4}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter your text here"
                  bg="white"
                />
                <InputRightElement width="4.5rem">
                  <Button colorScheme="primary" size="sm">
                    Enviar
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Box>
        </Flex>
      </section>

      <footer>
        <Flex
          as="footer"
          py={8}
          w="90%"
          mx="auto"
          maxW="container.xl"
          justifyContent="center"
        >
          <Heading size="sm">
            © {new Date().getFullYear()} - Analisis de Algoritmo
          </Heading>
        </Flex>
      </footer>
    </>
  );
}

export default Home;
