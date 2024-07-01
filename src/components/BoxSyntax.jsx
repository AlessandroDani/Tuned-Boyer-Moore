
/**
 * BoxSyntax Component
 * 
 * Este componente fue desarrollado con la asistencia de Claude 3.5, un modelo de IA.
 * Fecha de asistencia: [27/06/2024]
 * 
 * Funcionalidad: Este componente esta encargado de comunicarse con el componente TimeComplexity 
 * para cargar y mostrar el código junto con los mensajes de complejidad especificados por cada línea 
 * en la página de complexity, permitiendo interactividad con el usuario por medio de SyntaxHighlighter
 * y algunos componentes de Chakra UI para mejorar la visualización de la información.
 * 
 * Partes asistidas por IA:
 * - Lógica para el posicionamiento dinámico del Popover.
 * - Evento onClick y manejo de las referencia de las líneas seleccionadas.
 */

import { useState, useRef } from 'react';
import { Box, Popover, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton} from '@chakra-ui/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TimeComplexity from './TimeComplexity';

const BoxSyntax =  ({code, index}) => { 

    const [selectedLine, setSelectedLine] = useState(null);
    const lineRefs = useRef({});

    const handleLineClick = (lineNumber) => {
        setSelectedLine(prevLine => prevLine === lineNumber ? null : lineNumber);
    };

    return(
        <Box position="relative">
            <SyntaxHighlighter language="javascript" style={docco} wrapLines={true} showLineNumbers={true}

                //Inicio del códgio asistido por IA(Claude 3.5)

                lineProps={lineNumber => ({
                    style: { 
                    display: 'block',
                    cursor: 'pointer',
                    background: selectedLine === lineNumber ? 'grey' : 'transparent',
                    }, 

                    onClick: () => handleLineClick(lineNumber),
                    ref: (el) => lineRefs.current[lineNumber] = el

                //Fin del códgio asistido por IA(Claude 3.5)

                })}>
                {code}
            </SyntaxHighlighter>
            <Popover

                //Inicio del códgio asistido por IA(Claude 3.5)

                isOpen={selectedLine !== null}
                onClose={() => setSelectedLine(null)}

                //Fin del códgio asistido por IA(Claude 3.5) 

                placement="right"
                strategy="fixed"

                //Inicio del códgio asistido por IA(Claude 3.5)

                referenceElement={selectedLine !== null ? lineRefs.current[selectedLine] : null}

                //Fin del códgio asistido por IA(Claude 3.5) 
            >
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Complexity Analysis</PopoverHeader>
                    <PopoverBody>
                        {selectedLine !== null && (
                            <TimeComplexity selectedLine={selectedLine} index={index} />
                        )}
                    </PopoverBody>
                </PopoverContent>
            </Popover>  
        </Box>
  
    );
};

export default BoxSyntax;