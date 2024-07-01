import { Box, Text, Collapse} from '@chakra-ui/react';

const TimeComplexity = ({ selectedLine, index}) => {

    const elementaryOperations = {

        1: {

            1: "OE: 2 - Declaración e Inicialización del alfabeto admitido.",
            6: "OE: 3 - Declaración de variables auxiliares.",
            7: "OE: k+2 - Declaración e inicialización de valores del alfabeto.",
            9: "OE: 3+8-k+4σ+(m(k+6)) - Inicialización de caracteres del alfabeto y de los caracteres del patrón.",
            10: "OE: k+3 - Inicialización de variable auxiliar para los saltos.",
            11: "OE: k+2 - Asignación de 0 para los saltos del último caracter del patrón.",
            13: "OE: 6+10+5m - Creación del centinela para evitar desbordamientos.",
            15: "OE: 1 - Inicialización del apuntador.",
            17: "OE: 1 - Comparación entre apuntador y tamaño del texto. / O(n) El ciclo itera sobre cada elemento del texto en su peor caso.",
            20: "OE: k+3 - Asignación de saltos a partir del caracter apuntado.",
            22: "OE: 1 - Comparación del valor auxiliar con los saltos. / O(1) El ciclo se ejecuta en un tiempo constante de 1 en su peor caso ya que realiza menos saltos.",
            25: "OE: 2 - Asignación de saltos al apuntador.",
            26: "OE: k+3 - Asignación de saltos a partir del caracter apuntado.",
            27: "OE: 2 - Asignación de saltos al apuntador.",
            28: "OE: k+3 - Asignación de saltos a partir del caracter apuntado.",
            29: "OE: 2 - Asignación de saltos al apuntador.",
            30: "OE: k+3 - Asignación de saltos a partir del caracter apuntado.",
            34: "OE: 7+7+7m - Comparación de la coindicencia para garantizar una coincidencia exacta dentro de los límites del texto.",
            37: "OE: k+1 - Impresión de la posición de la coincidencia.",
            41: "OE: 2 - Suma de saltos del caracter final del patrón al apuntador.",

        },
        2: {

            3: "OE: 5 - Inicialización, pregunta e incremento del ciclo. / O(σ) El ciclo itera σ veces en donde σ es el tamaño del alfabeto.",
            4: "OE: 1 - Inicialización del vector de saltos para cada caracter.",
            7: "OE: 6 - Inicialización, pregunta e incremento del ciclo. / O(m) El ciclo itera un total de m - 1 veces en donde m es el tamaño del patrón.",
            8: "OE: k+2 - Asignación de saltos con posiciones relativas de los caracteres del patrón."
    
        },
        3: {

            4: "OE: 2 - Declaración y asignación de variable auxiliar.",
            6: "OE: 5 - Inicialización, pregunta e incremento del ciclo. / O(m) El ciclo itera un total de m veces en donde m es el tamaño del patrón.",
            9: "OE: 2 - Asignación de caracteres centinelas para el control de desbordamiento.",
            13: "OE: 2 - Return con la nueva cadena de texto."

        },
        4: {

            4: "OE: 5 - Inicialización, pregunta e incremento del ciclo. / O(m) El ciclo itera m veces en donde m es el tamaño del patrón.",
            7: "OE: 4 - Comparación de exactitud en caracteres del patrón y el texto.",
            10: "OE: 1 - Return con un valor booleano si incumple la coincidencia.",
            16: "OE: 1 - Return con un valor booleano si cumple con todas las coincidencias."

        }

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