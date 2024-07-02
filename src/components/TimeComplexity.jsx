import { Box, Text, Collapse} from '@chakra-ui/react';

const TimeComplexity = ({ selectedLine, index}) => {

    const elementaryOperations = {

        1: {

            1: "EO: 2 - Declaration and Initialization of the allowed alphabet.",
            6: "EO: 3 - Declaration of auxiliary variables.",
            7: "EO: k+2 - Declaration and initialization of alphabet values.",
            9: "EO: 3+8-k+4σ+(m(k+6)) - Initialization of alphabet characters and pattern characters.",
            10: "EO: k+3 - Initialization of auxiliary variable for jumps.",
            11: "EO: k+2 - Assignment of 0 for jumps of the last character of the pattern.",
            13: "EO: 6+10+5m - Creation of sentinel to avoid overflows.",
            15: "EO: 1 - Initialization of the pointer.",
            17: "EO: 1 - Comparison between pointer and text size. / O(n) The cycle iterates over each element of the text in its worst case.",
            20: "EO: k+3 - Assignment of jumps from the pointed character.",
            22: "EO: 1 - Comparison of auxiliary value with jumps. / O(1) The cycle executes in a constant time of 1 in its worst case as it makes fewer jumps.",
            25: "EO: 2 - Assignment of jumps to the pointer.",
            26: "EO: k+3 - Assignment of jumps from the pointed character.",
            27: "EO: 2 - Assignment of jumps to the pointer.",
            28: "EO: k+3 - Assignment of jumps from the pointed character.",
            29: "EO: 2 - Assignment of jumps to the pointer.",
            30: "EO: k+3 - Assignment of jumps from the pointed character.",
            34: "EO: 7+7+7m - Comparison of the match to ensure an exact match within the text limits.",
            37: "EO: k+1 - Printing of the match position.",
            41: "EO: 2 - Addition of jumps from the final character of the pattern to the pointer.",

            },

        2: {

            3: "EO: 5 - Initialization, question and increment of the cycle. / O(σ) The cycle iterates σ times where σ is the size of the alphabet.",
            4: "EO: 1 - Initialization of the jump vector for each character.",
            7: "EO: 6 - Initialization, question and increment of the cycle. / O(m) The cycle iterates a total of m - 1 times where m is the size of the pattern.",
            8: "EO: k+2 - Assignment of jumps with relative positions of the pattern characters."

        },

        3: {

            4: "EO: 2 - Declaration and assignment of auxiliary variable.",
            6: "EO: 5 - Initialization, question and increment of the cycle. / O(m) The cycle iterates a total of m times where m is the size of the pattern.",
            9: "EO: 2 - Assignment of sentinel characters for overflow control.",
            13: "EO: 2 - Return with the new text string."

        },

        4: {

            4: "EO: 5 - Initialization, question and increment of the cycle. / O(m) The cycle iterates m times where m is the size of the pattern.",
            7: "EO: 4 - Comparison of exactness in pattern and text characters.",
            10: "EO: 1 - Return with a boolean value if the match fails.",
            16: "EO: 1 - Return with a boolean value if all matches are met."

        },

    };
  
    return (
        <>
            <Collapse in={!!selectedLine} animateOpacity>
                <Box
                p='40px'
                color='white'
                mt='4'
                bg='blue.500'
                rounded='md'
                shadow='md'
                >
                    <Text>{elementaryOperations[index][selectedLine] || "Seleccione una línea en el código propuesto para conocer las operaciones elementales que realiza y una breve descripción de su proposito."}</Text>
                </Box>
            </Collapse>       
        </>

    );
  
  };

  export default TimeComplexity