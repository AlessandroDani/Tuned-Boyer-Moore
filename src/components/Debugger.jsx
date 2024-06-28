import { Box, Stack, Code, Text, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";

const Debugger = ({ lines }) => {
  const codeColor = "#F2F2EF";
  return (
    <Box display="flex" justifyContent="flex-end" flexDir="column">
      <Box justifyContent="end" ml="auto">
          <IconButton
            colorScheme="green"
            size="sm"
            aria-label="Continue"
            icon={<ArrowForwardIcon />} 
            m={2}
          />
          <IconButton
            colorScheme="red"
            size="sm"
            aria-label="Stop"
            icon={<CloseIcon />}
            
          />
      </Box>

      <Box
        ml="auto"
        borderRadius={9}
        w="40%"
        p={2}
        h="25vw"
        bg={codeColor}
        overflow="scroll"
      >
        <Text>
          <Stack direction="column">
            <Code colorScheme={codeColor}>1 const ASIZE = 256;</Code>
            <Code colorScheme={codeColor}>
              2 export function myAlgorithm(text, pattern) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              3&nbsp;&nbsp;function preBmBc(pattern, m, bmBc) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              4&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; ASIZE; ++i) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bmBc[i] = m;
            </Code>
            <Code colorScheme={codeColor}>6&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              7&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m - 1; ++i) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bmBc[pattern.charCodeAt(i)] =
              m - i - 1;
            </Code>
            <Code colorScheme={codeColor}>9&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>10&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              11&nbsp;&nbsp;function memset(text, character, m) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              12&nbsp;&nbsp;&nbsp;&nbsp;let aux = {'""'};
            </Code>
            <Code colorScheme={codeColor}>
              13&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m; i++) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aux += character;
            </Code>
            <Code colorScheme={codeColor}>15&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              16&nbsp;&nbsp;&nbsp;&nbsp;return text + aux;
            </Code>
            <Code colorScheme={codeColor}>17&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              18&nbsp;&nbsp;function memcmp(text, j, m, pattern) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              19&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; m; i++) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (text[j + i] !==
              pattern[i]) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;
            </Code>
            <Code colorScheme={codeColor}>
              22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
            </Code>
            <Code colorScheme={codeColor}>23&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              24&nbsp;&nbsp;&nbsp;&nbsp;return true;
            </Code>
            <Code colorScheme={codeColor}>25&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              26&nbsp;&nbsp;function TUNEDBM(pattern, m, text, n) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              27&nbsp;&nbsp;&nbsp;&nbsp;let j, k, shift;
            </Code>
            <Code colorScheme={codeColor}>
              28&nbsp;&nbsp;&nbsp;&nbsp;const bmBc = new Array(ASIZE);
            </Code>
            <Code colorScheme={codeColor}>
              29&nbsp;&nbsp;&nbsp;&nbsp;const indices = [];
            </Code>
            <Code colorScheme={codeColor}>
              30&nbsp;&nbsp;&nbsp;&nbsp;preBmBc(pattern, m, bmBc);
            </Code>
            <Code colorScheme={codeColor}>
              31&nbsp;&nbsp;&nbsp;&nbsp;shift = bmBc[pattern.charCodeAt(m - 1)];
            </Code>
            <Code colorScheme={codeColor}>
              32&nbsp;&nbsp;&nbsp;&nbsp;bmBc[pattern.charCodeAt(m - 1)] = 0;
            </Code>
            <Code colorScheme={codeColor}>
              33&nbsp;&nbsp;&nbsp;&nbsp;text = memset(text, pattern[m - 1], m);
            </Code>
            <Code colorScheme={codeColor}>
              34&nbsp;&nbsp;&nbsp;&nbsp;j = 0;
            </Code>
            <Code colorScheme={codeColor}>
              35&nbsp;&nbsp;&nbsp;&nbsp;while (j &lt;= n - m) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              36&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k = bmBc[text.charCodeAt(j +
              m - 1)];
            </Code>
            <Code colorScheme={codeColor}>
              37&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (k !== 0) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              38&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
            </Code>
            <Code colorScheme={codeColor}>
              39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
              bmBc[text.charCodeAt(j + m - 1)];
            </Code>
            <Code colorScheme={codeColor}>
              40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
            </Code>
            <Code colorScheme={codeColor}>
              41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
              bmBc[text.charCodeAt(j + m - 1)];
            </Code>
            <Code colorScheme={codeColor}>
              42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += k;
            </Code>
            <Code colorScheme={codeColor}>
              43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;k =
              bmBc[text.charCodeAt(j + m - 1)];
            </Code>
            <Code colorScheme={codeColor}>
              44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
            </Code>
            <Code colorScheme={codeColor}>
              45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (j &lt;= n - m &&
              memcmp(text, j, m, pattern)) {"{"}
            </Code>
            <Code colorScheme={codeColor}>
              46&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indices.push(j);
            </Code>
            <Code colorScheme={codeColor}>
              47&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
            </Code>
            <Code colorScheme={codeColor}>
              48&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j += shift;
            </Code>
            <Code colorScheme={codeColor}>49&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              50&nbsp;&nbsp;&nbsp;&nbsp;return indices;
            </Code>
            <Code colorScheme={codeColor}>51&nbsp;&nbsp;{"}"}</Code>
            <Code colorScheme={codeColor}>
              52&nbsp;&nbsp;const n = text.length;
            </Code>
            <Code colorScheme={codeColor}>
              53&nbsp;&nbsp;const m = pattern.length;
            </Code>
            <Code colorScheme={codeColor}>
              54&nbsp;&nbsp;const indices = TUNEDBM(pattern, m, text, n);
            </Code>
            <Code colorScheme={codeColor}>55&nbsp;&nbsp;return indices;</Code>
            <Code colorScheme={codeColor}>56 {"}"}</Code>
          </Stack>
        </Text>
      </Box>
    </Box>
  );
};

export default Debugger;
