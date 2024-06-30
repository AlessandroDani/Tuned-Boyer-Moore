import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Link, useLocation } from "wouter";
import Introduction from "../assets/img/introduction.png";
import Debugger from "../components/Debugger";

function Home({ setInputValue }) {
  const [value, setValue] = useState("");
  const [, navigate] = useLocation();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      navigate("/search-pattern");
    }
  };

  return (
    <>
      <Layout>
        <section>
          <Box
            w="90%"
            my={10}
            as="main"
            mx="auto"
            maxW="container.xl"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              w={{ md: "50%" }}
              mx="auto"
              textAlign="center"
              mt="15vh"
              mb="15vh"
            >
              <Heading
                mb={4}
                size="2xl"
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
                    onKeyDown={handleKeyDown}
                  />
                  <InputRightElement width="4.5rem">
                    <Link href="/search-pattern">
                      <Button
                        colorScheme="primary"
                        size="sm"
                        onClick={handleSubmit}
                      >
                        Enviar
                      </Button>
                    </Link>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            p={7}
            paddingBottom={0}
            borderRadius={9}
            bg="white"
          >
            <Box w="80%">
              <Heading size="xl" p={4}>
              Pattern Search Application
              </Heading>
              <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
                <Box flex={1}>
                  <Text fontSize="xl" p={2} paddingRight={4}>
                  Our application is designed to help you find specific patterns within text using advanced search algorithms. Utilizing the optimized Boyer-Moore algorithm, known for its efficiency in searching patterns in large volumes of text, our tool is especially useful for data analysis, software development, and other applications where efficient pattern searching is crucial. This algorithm is ideal for applications that require fast text searches.
                  </Text>
                </Box>
                <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
                  <Image
                  w='600px'
                  pb={9}
                    borderRadius={9}
                    src={Introduction}
                    alt="Find Pattern"
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            p={7}
            paddingBottom={0}
            borderRadius={9}
            bg="#F5F5F5"
          >
            <Box w="80%">
              <Heading size="xl" p={4}>
                Debugger
              </Heading>
              <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
                <Box flex={1}>
                  <Text fontSize="xl" p={2}>
                    Our debugger allows you to see step by step how the
                    algorithm executes. You can follow each line of code that
                    runs, understand how the data is processed, and see exactly
                    how the patterns are found. <br></br>This is especially
                    useful for developers and students who want to gain a deep
                    understanding of the algorithm&apos;s functioning
                  </Text>
                </Box>
                <Box>
                  <Debugger lines={""}
                  onExecutionFinished={null} />
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </Layout>
    </>
  );
}

export default Home;
