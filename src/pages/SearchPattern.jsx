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
  const [count, setCount] = useState(0);
  const [executedLines, setExecutedLines] = useState([]);
  const [Debug, setDebug] = useState(false);
  const [, setExecutionFinished] = useState(false);

  const handleChangePattern = (e) => {
    setPattern(e.target.value);
  };

  const handleRun = () => {
    const result = myAlgorithm(inputValue, pattern);
    if (pattern) {
      const indices = result.indices;
      setExecutedLines(result.executedLines);
      setCount(indices.length <= 1 ? 0 : indices.length);
      let newText = inputValue;
      setCount(indices.length);
      indices.forEach(() => {
        newText = inputValue.replace(
          new RegExp(pattern, "g"),
          (match) => `<span class="highlight">${match}</span>`
        );
      });
      setHighlightedText(newText);
    }else{
      setCount(0);
    }
  };

  const toggleDebugger = () => {
    const result = myAlgorithm(inputValue, pattern);
    const indices = result.indices;
    setExecutedLines(result.executedLines);
    setCount(indices.length);
    setDebug(true);
  };

  const handleExecutionFinish = (finished) => {
    //console.log('entra', finished);
    setExecutionFinished(finished);
    if (finished) {
      handleRun();
    } else {
      setHighlightedText(inputValue);
    }
  };

  return (
    <>
      <Layout>
        <Box maxW="80vw" mx="auto" paddingTop={0}>
          <Box display="flex" width="100%" height="100%">
            <Box w="100%" paddingRight={3} overflow="auto" maxH="50vh">
              <Text
                dangerouslySetInnerHTML={{ __html: highlightedText }}
              ></Text>
            </Box>
            {Debug && (
              <Box w="60%">
                <Debugger
                  lines={executedLines}
                  onExecutionFinished={handleExecutionFinish}
                />
              </Box>
            )}
          </Box>
          <Text>
            The pattern <span style={{ fontWeight: "bold" }}>{pattern}</span>{" "}
            has been found <span style={{ fontWeight: "bold" }}>{count}</span>{" "}
            times in the text.
          </Text>
          <Center height="50px">
            <Divider borderColor="gray.400" orientation="horizontal" />
          </Center>
          <Box display={"flex"} justifyContent={"center"} paddingBottom={2}>
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
            <Button
              colorScheme="primary"
              color="white"
              onClick={toggleDebugger}
            >
              {Debug}Debug
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export default SearchPattern;
