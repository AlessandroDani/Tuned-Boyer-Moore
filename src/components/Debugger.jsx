import { Box, Stack, Code, Text, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

const Debugger = ({ lines, onExecutionFinished}) => {
  const codeColor = "#F2F2EF";
  const highlightColor = "blue";
  const [currentLine, setCurrentLine] = useState(lines[0]);
  const indice = useRef(1);

  const handleContinue = () => {
    if (indice.current < lines.length) {
      setCurrentLine(lines[indice.current] - 1);
      indice.current++;
      console.log(lines[indice.current]);
    }else{
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

  const handleJump= () => {

    for(let i = indice.current; i < lines.length; i++){
      if(lines[i] == 5 && lines[i+1] == 6){
        console.log('salta');
        indice.current = i+1;
        setCurrentLine(i+1);
        handleContinue();
        break;
      }
    }
  };


  return (
    <Box display="flex" justifyContent="flex-end" flexDir="column-reverse">
      <Box justifyContent="end" ml="auto">
        <IconButton
          colorScheme="green"
          size="sm"
          aria-label="Step"
          icon={<ArrowForwardIcon />}
          m={2}
          onClick={handleContinue}
        />
        <IconButton
          colorScheme="blue"
          size="sm"
          aria-label="Continue"
          icon={<ArrowDownIcon />}
          onClick={handleJump}
        />
        <IconButton
          colorScheme="red"
          size="sm"
          aria-label="Stop"
          icon={<CloseIcon />}
          onClick={handleStop}
          m={2}
        />
      </Box>

      <Box
        borderRadius={9}
        w="100%"
        p={2}
        maxH="50vh"
        bg={codeColor}
        overflowY="auto"
      >
        <Text>
            <Stack direction="column">
              <Code colorScheme={currentLine === 0 ? highlightColor : codeColor}>
                1 const ASIZE = 256;
              </Code>
              <Code colorScheme={currentLine === 1 ? highlightColor : codeColor}>
                2 export function myAlgorithm(text, pattern) {"{"}
              </Code>
              <Code colorScheme={currentLine === 2 ? highlightColor : codeColor}>
                3&nbsp;&nbsp;function preBmBc(pattern, m, bmBc) {"{"}
              </Code>
              <Code colorScheme={currentLine === 3 ? highlightColor : codeColor}>
                4&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; ASIZE; ++i) {"{"}
              </Code>
              <Code colorScheme={currentLine === 4 ? highlightColor : codeColor}>
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bmBc[i] = m;
              </Code>
              <Code colorScheme={currentLine === 5 ? highlightColor : codeColor}>
                6&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 6 ? highlightColor : codeColor}>
                7&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m - 1; ++i) {"{"}
              </Code>
              <Code colorScheme={currentLine === 7 ? highlightColor : codeColor}>
                8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bmBc[pattern.charCodeAt(i)] =
                m - i - 1;
              </Code>
              <Code colorScheme={currentLine === 8 ? highlightColor : codeColor}>
                9&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 9 ? highlightColor : codeColor}>
                10&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 10 ? highlightColor : codeColor}>
                11&nbsp;&nbsp;function memset(text, character, m) {"{"}
              </Code>
              <Code colorScheme={currentLine === 11 ? highlightColor : codeColor}>
                12&nbsp;&nbsp;&nbsp;&nbsp;let aux = {'""'};
              </Code>
              <Code colorScheme={currentLine === 12 ? highlightColor : codeColor}>
                13&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m; i++) {"{"}
              </Code>
              <Code colorScheme={currentLine === 13 ? highlightColor : codeColor}>
                14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aux += character;
              </Code>
              <Code colorScheme={currentLine === 14 ? highlightColor : codeColor}>
                15&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 15 ? highlightColor : codeColor}>
                16&nbsp;&nbsp;&nbsp;&nbsp;return text + aux;
              </Code>
              <Code colorScheme={currentLine === 16 ? highlightColor : codeColor}>
                17&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 17 ? highlightColor : codeColor}>
                18&nbsp;&nbsp;function memcmp(text, j, m, pattern) {"{"}
              </Code>
              <Code colorScheme={currentLine === 18 ? highlightColor : codeColor}>
                19&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m; i++) {"{"}
              </Code>
              <Code colorScheme={currentLine === 19 ? highlightColor : codeColor}>
                20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (text[j + i] !==
                pattern[i]) {"{"}
              </Code>
              <Code colorScheme={currentLine === 20 ? highlightColor : codeColor}>
                21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;
              </Code>
              <Code colorScheme={currentLine === 21 ? highlightColor : codeColor}>
                22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 22 ? highlightColor : codeColor}>
                23&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 23 ? highlightColor : codeColor}>
                24&nbsp;&nbsp;&nbsp;&nbsp;return true;
              </Code>
              <Code colorScheme={currentLine === 24 ? highlightColor : codeColor}>
                25&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 25 ? highlightColor : codeColor}>
                26&nbsp;&nbsp;function TUNEDBM(pattern, m, text, n) {"{"}
              </Code>
              <Code colorScheme={currentLine === 26 ? highlightColor : codeColor}>
                27&nbsp;&nbsp;&nbsp;&nbsp;let j, k, shift;
              </Code>
              <Code colorScheme={currentLine === 27 ? highlightColor : codeColor}>
                28&nbsp;&nbsp;&nbsp;&nbsp;const bmBc = new Array(ASIZE);
              </Code>
              <Code colorScheme={currentLine === 28 ? highlightColor : codeColor}>
                29&nbsp;&nbsp;&nbsp;&nbsp;const indices = [];
              </Code>
              <Code colorScheme={currentLine === 29 ? highlightColor : codeColor}>
                30&nbsp;&nbsp;&nbsp;&nbsp;preBmBc(pattern, m, bmBc);
              </Code>
              <Code colorScheme={currentLine === 30 ? highlightColor : codeColor}>
                31&nbsp;&nbsp;&nbsp;&nbsp;shift = bmBc[pattern.charCodeAt(m - 1)];
              </Code>
              <Code colorScheme={currentLine === 31 ? highlightColor : codeColor}>
                32&nbsp;&nbsp;&nbsp;&nbsp;bmBc[pattern.charCodeAt(m - 1)] = 0;
              </Code>
              <Code colorScheme={currentLine === 32 ? highlightColor : codeColor}>
                33&nbsp;&nbsp;&nbsp;&nbsp;text = memset(text, pattern[m - 1], m);
              </Code>
              <Code colorScheme={currentLine === 33 ? highlightColor : codeColor}>
                34&nbsp;&nbsp;&nbsp;&nbsp;j = 0;
              </Code>
              <Code colorScheme={currentLine === 34 ? highlightColor : codeColor}>
                35&nbsp;&nbsp;&nbsp;&nbsp;while (j &lt;= n - m) {"{"}
              </Code>
              <Code colorScheme={currentLine === 35 ? highlightColor : codeColor}>
                36&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = bmBc[text.charCodeAt(j +
                m - 1)];
              </Code>
              <Code colorScheme={currentLine === 36 ? highlightColor : codeColor}>
                37&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (k !== 0) {"{"}
              </Code>
              <Code colorScheme={currentLine === 37 ? highlightColor : codeColor}>
                38&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
              </Code>
              <Code colorScheme={currentLine === 38 ? highlightColor : codeColor}>
                39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
                bmBc[text.charCodeAt(j + m - 1)];
              </Code>
              <Code colorScheme={currentLine === 39 ? highlightColor : codeColor}>
                40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
              </Code>
              <Code colorScheme={currentLine === 40 ? highlightColor : codeColor}>
                41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
                bmBc[text.charCodeAt(j + m - 1)];
              </Code>
              <Code colorScheme={currentLine === 41 ? highlightColor : codeColor}>
                42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
              </Code>
              <Code colorScheme={currentLine === 42 ? highlightColor : codeColor}>
                43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
                bmBc[text.charCodeAt(j + m - 1)];
              </Code>
              <Code colorScheme={currentLine === 43 ? highlightColor : codeColor}>
                44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 44 ? highlightColor : codeColor}>
                45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (j &lt;= n - m &&
                memcmp(text, j, m, pattern)) {"{"}
              </Code>
              <Code colorScheme={currentLine === 45 ? highlightColor : codeColor}>
                46&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indices.push(j);
              </Code>
              <Code colorScheme={currentLine === 46 ? highlightColor : codeColor}>
                47&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 47 ? highlightColor : codeColor}>
                48&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += shift;
              </Code>
              <Code colorScheme={currentLine === 48 ? highlightColor : codeColor}>
                49&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 49 ? highlightColor : codeColor}>
                50&nbsp;&nbsp;&nbsp;&nbsp;return indices;
              </Code>
              <Code colorScheme={currentLine === 50 ? highlightColor : codeColor}>
                51&nbsp;&nbsp;{"}"}
              </Code>
              <Code colorScheme={currentLine === 51 ? highlightColor : codeColor}>
                52&nbsp;&nbsp;const n = text.length;
              </Code>
              <Code colorScheme={currentLine === 52 ? highlightColor : codeColor}>
                53&nbsp;&nbsp;const m = pattern.length;
              </Code>
              <Code colorScheme={currentLine === 53 ? highlightColor : codeColor}>
                54&nbsp;&nbsp;const indices = TUNEDBM(pattern, m, text, n);
              </Code>
              <Code colorScheme={currentLine === 54 ? highlightColor : codeColor}>
                55&nbsp;&nbsp;return indices;
              </Code>
              <Code colorScheme={currentLine === 55 ? highlightColor : codeColor}>
                56 {"}"}
              </Code>
          </Stack>
        </Text>
      </Box>
    </Box>
  );
};

export default Debugger;
