import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Link } from "wouter";


function Home({ setInputValue }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
  };

  return (
    <>
      <Layout>
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
                Enter the text where you want{" "}
                <span style={{ color: "#1D5CA9" }}>to search</span> for the
                pattern
              </Heading>

              <Flex mt={4} gap={2} justifyContent="center" p={4}>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter your text here"
                    bg="white"
                    value={value}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Link href="/search-pattern">
                      <Button colorScheme="primary" size="sm" onClick={handleSubmit}>
                        Enviar
                      </Button>
                    </Link>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Box>
          </Flex>
        </section>
      </Layout>
    </>
  );
}



export default Home;
