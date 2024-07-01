/**
 * Debugger Component
 *
 * Este componente fue desarrollado con la asistencia de ChatGPT, un modelo de IA.
 * Fecha de asistencia: [28/06/2024]
 *
 * Funcionalidad: Este componente esta encargado de mostar el codigo en un Box el cual
 * se puede desplazar, sigue la linea en la que va, tiene un stop en una linea para que salte
 * directamente ahi, y tiene un boton de parar la ejecución
 *
 * Partes asistidas por IA:
 * - Lógica para traer el codigo de codeLines para mostrarlo en etiquetas Code.
 * - Evento useEffect y handleLineClick para seguir la linea en la que va
 */

import {
  Box,
  Code,
  IconButton,
  Tooltip,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { codeLines } from "../algorithms/codeLines";

const Debugger = ({ lines, onExecutionFinished }) => {
  const codeColor = "#F2F2EF";
  const highlightColor = "blue";
  const [currentLine, setCurrentLine] = useState(lines[0] - 1);
  const [selectedLine, setSelectedLine] = useState(null);
  const [noSelectLine, setNoSelectLine] = useState(false);
  const indice = useRef(1);
  const lineRefs = useRef([]);

  const {
    isOpen: showAlert,
    onClose: closeAlert,
    onOpen: openAlert,
  } = useDisclosure({ defaultIsOpen: false });

  //Inicio del código asistido por IA(ChatGPT 3.5)
  useEffect(() => {
    if (lineRefs.current[currentLine]) {
      lineRefs.current[currentLine].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentLine]);

  //Fin del código asistido por IA(ChatGPT 3.5)

  const handleContinue = () => {
    if (lines !== "") {
      closeAlert();
      if (indice.current < lines.length) {
        setCurrentLine(lines[indice.current] - 1);
        indice.current++;
      } else {
        setCurrentLine(null);
        onExecutionFinished(true);
      }
    }
  };

  const handleStop = () => {
    if (lines !== "") {
      setCurrentLine(null);
      indice.current = 1;
      onExecutionFinished(false);
      setSelectedLine(null);
    }
  };

  const handleJump = () => {
    if (lines !== "") {
      let found = false;
      for (let i = indice.current; i < lines.length && !found; i++) {
        if (lines[i] - 1 === selectedLine) {
          setCurrentLine(selectedLine);
          indice.current = i + 1;
          found = true;
        }
      }
      if (!found) {
        openAlert();
      } else {
        closeAlert();
      }
    }
  };

  //Inicio del código asistido por IA(ChatGPT 3.5)
  const handleLineClick = (index) => {
    !noSelectLine ? setSelectedLine(index) : setSelectedLine(null);
    setNoSelectLine(!noSelectLine);
  };
  //Fin del código asistido por IA(ChatGPT 3.5)

  return (
    <Box display="flex" justifyContent="flex-end" flexDir="column-reverse">
      <Box justifyContent="center" m="auto">
        <Tooltip
          label="Step-by-Step Execution"
          aria-label="Step-by-Step  Execution"
        >
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

      {showAlert && (
        <Alert status="info">
          <AlertIcon />
          <Box>
            <AlertTitle>Execution Information</AlertTitle>
            <AlertDescription>
              The code execution does not pass through this line or you have
              selected a line that the debugger has already passed. Please try
              another.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={closeAlert}
          />
        </Alert>
      )}

      <Box
        borderRadius={9}
        w="100%"
        p={2}
        maxH="50vh"
        bg={codeColor}
        overflow="auto"
      >
        {codeLines.map((line, index) => (
          //  Inicio del código asistido por IA(ChatGPT 3.5)
          <Box
            key={index}
            display="flex"
            onClick={() => handleLineClick(index)}
            ref={(el) => (lineRefs.current[index] = el)}
            bg={selectedLine === index ? "tomato" : "transparent"}
            borderRadius="sm"
            //  Fin del código asistido por IA(ChatGPT 3.5)
          >
            <Box
              width="30px"
              textAlign="right"
              pr={2}
              userSelect="none"
              color={currentLine === index ? highlightColor : "gray"}
              cursor="pointer"
            >
              {index + 1}
            </Box>
            <Code
              whiteSpace="pre"
              flex="1"
              colorScheme={currentLine === index ? highlightColor : codeColor}
              // Inicio del código asistido por IA(ChatGPT 3.5)
              style={{
                overflowWrap: "break-word",
                wordWrap: "break-word",
                wordBreak: "break-word",
                display: "inline-block",
              }}
              // Fin del código asistido por IA(ChatGPT 3.5)
              dangerouslySetInnerHTML={{ __html: line }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Debugger;
