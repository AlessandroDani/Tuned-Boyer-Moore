import { Box, Code, IconButton, Tooltip } from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { codeLines } from "../algorithms/codeLines"

const Debugger = ({ lines, onExecutionFinished }) => {
  const codeColor = "#F2F2EF";
  const highlightColor = "blue";
  const [currentLine, setCurrentLine] = useState(lines[0]-1);
  const indice = useRef(1);
  const lineRefs = useRef([]);

  useEffect(() => {
    if (lineRefs.current[currentLine]) {
      lineRefs.current[currentLine].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentLine]);


  const handleContinue = () => {
    if (indice.current < lines.length) {
      setCurrentLine(lines[indice.current] - 1);
      indice.current++;
      console.log(lines[indice.current]);
    } else {
      console.log(indice.current, lines.length);
      setCurrentLine(null);
      onExecutionFinished(true);
    }
  };

  const handleStop = () => {
    setCurrentLine(null);
    indice.current = 1;
    onExecutionFinished(false);
  };

  const handleJump = () => {
    for (let i = indice.current; i < lines.length; i++) {
      if (lines[i] == 5 && lines[i + 1] == 6) {
        console.log("salta");
        indice.current = i + 1;
        setCurrentLine(i + 1);
        handleContinue();
        break;
      }
    }
  };

  return (
    <Box display="flex" justifyContent="flex-end" flexDir="column-reverse">
      <Box justifyContent="center" m="auto">
      <Tooltip label="Step-by-Step Execution" aria-label="Step-by-Step  Execution">
        <IconButton
          colorScheme="green"
          size="sm"
          aria-label="Step"
          icon={<ArrowForwardIcon />}
          m={2}
          onClick={handleContinue}
        />
        </Tooltip>
        <Tooltip label="Continue Execution" aria-label="Continue Execution">
        <IconButton
          colorScheme="blue"
          size="sm"
          icon={<ArrowDownIcon />}
          onClick={handleJump}
        />
        </Tooltip>
        <Tooltip label="Stop Execution" aria-label="Stop Execution">
          <IconButton
            colorScheme="teal"
            size="sm"
            icon={<CloseIcon />}
            onClick={handleStop}
            m={2}
          />
        </Tooltip>
      </Box>

      <Box borderRadius={9} w="100%" p={2} maxH="50vh" bg={codeColor} overflow="auto">
      {codeLines.map((line, index) => (
          <Box display="flex" key={index} ref={(el) => (lineRefs.current[index] = el)}>
            <Box
              width="30px"
              textAlign="right"
              pr={2}
              userSelect="none"
              color={currentLine === index ? highlightColor : 'gray'}
            >
              {index + 1}
            </Box>
            <Code
              whiteSpace="pre"
              colorScheme={currentLine === index ? highlightColor : codeColor}
              flex="1"
            >
              {line}
            </Code>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Debugger;
