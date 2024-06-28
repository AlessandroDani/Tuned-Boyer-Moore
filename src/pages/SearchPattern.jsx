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
import Debugger from "../components/Debugger";
import { useState } from "react";

function SearchPattern({ inputValue }) {
  const [pattern, setPattern] = useState("");
  const [highlightedText, setHighlightedText] = useState(inputValue);
  let [count, setCount] = useState(0);
  const [executedLines, setExecutedLines] = useState([]);
  const [Debug, setDebug] = useState(false);

  const handleChangePattern = (e) => {
    setPattern(e.target.value);
  };

  const handleRun = () => {
    const result = myAlgorithm(inputValue, pattern);
    const indices = result.indices;
    setExecutedLines(result.executedLines);
    setCount(indices.length);
    console.log(executedLines)

    let newText;
    setCount(indices.length);
    indices.forEach(() => {
      newText = inputValue.replace(
        new RegExp(pattern, "g"),
        (match) => `<span class="highlight">${match}</span>`
      );
    });
    setHighlightedText(newText);
  };

  const toggleDebugger = () => {
    setDebug(true);
    handleRun();
  };

  return (
    <>
      <Layout>
        <Box maxW="80vw" mx="auto" paddingTop={2}>
          <Text dangerouslySetInnerHTML={{ __html: highlightedText }}></Text>
          {Debug && <Debugger lines={executedLines} />}
          
          <Center height="50px">
            <Divider borderColor="gray.400" orientation="horizontal" />
          </Center>
          <Text>
            The pattern <span style={{ fontWeight: "bold" }}>{pattern}</span>{" "}
            has been found <span style={{ fontWeight: "bold" }}>{count}</span>{" "}
            times in the text.
          </Text>
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
            <Button colorScheme="green" color="white" onClick={handleRun}>
              Run
            </Button>
            <Button colorScheme="primary" color="white" onClick={toggleDebugger}>
            {Debug}Debug
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export default SearchPattern;
