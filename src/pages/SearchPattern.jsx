import {
  Input,
  Box,
  Heading,
  Divider,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import { myAlgorithm } from "../algorithms/tuned-boyer-moore";
import Layout from "../components/Layout";
import { useState } from "react";

function SearchPattern({ inputValue }) {
  const [pattern, setPattern] = useState("");
  const [highlightedText, setHighlightedText] = useState(inputValue);

  const handleChangePattern = (e) => {
    setPattern(e.target.value);
  };

  const handleRun = () => {
    const indices = myAlgorithm(inputValue, pattern);
    let newText;
    indices.forEach(() => {
      newText = inputValue.replace(
        new RegExp(pattern, "g"),
        (match) => `<span class="highlight">${match}</span>`
      );
    });
    setHighlightedText(newText);
  };

  return (
    <>
      <Layout>
        <Box maxW="80vw" mx="auto" paddingTop={2}>
          <Text dangerouslySetInnerHTML={{ __html: highlightedText }}></Text>
          <Center height="50px">
            <Divider borderColor="gray.400" orientation="horizontal" />
          </Center>
          <Box display={"flex"} justifyContent={"center"} p={3}>
            <Heading size="md">Find Pattern</Heading>
          </Box>
          <Box display="flex" flexDir="row" mx="auto" gap={2}>
            <Input
              bg="white"
              placeholder="Enter you pattern here"
              value={pattern}
              onChange={handleChangePattern}
            />
            <Button
              colorScheme="green"
              color="white"
              onClick={handleRun}
            >
              Run
            </Button>
            <Button
              colorScheme="primary"
              color="white"
              onClick={handleRun}
            >
              Debug
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export default SearchPattern;
