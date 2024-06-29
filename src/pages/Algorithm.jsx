import { Image, Divider,Text, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, ListItem, OrderedList, UnorderedList, HStack } from '@chakra-ui/react'
import React from "react";
import YoutubePlayer from 'react-player/youtube';
import { Link } from "wouter";
import Layout from '../components/Layout';
import Portada from '../assets/img/portadaVideo.png';
import Diagrama from '../assets/img/diagramaFlujo.png';
import Boyer from '../assets/img/Boyer.png';
import Moore from '../assets/img/Moore.png';
import Example from '../assets/img/exampleTBM.png';
import Patrones from '../assets/img/patrones.png';
import Example1 from '../assets/img/example1.png';
import Example2 from '../assets/img/example2.png';
import Example3 from '../assets/img/example3.png';
import Example4 from '../assets/img/example4.png';
import Example5 from '../assets/img/example5.png';
import Example6 from '../assets/img/example6.png'
import Example7 from '../assets/img/example7.png'

function Algorithm() {
    return (
        <>
            <Layout>
                <main>
                    <Box mb={100}>
                        <Flex w="90%" gap={12} my={10} as="main" mx="auto" maxW="container.xl" alignItems="center" flexDir={{ base: "column", md: "row" }}>
                            <Box w={{ md: "50%" }} mx="auto" textAlign="center">
                                <Heading mb={4} size="xl" style={{ textWrap: "balance", }}>
                                    Tuned Boyer-Moore
                                </Heading>
                            </Box>
                        </Flex>
                        <Flex w="100%" justify="center" align="center">
                            <YoutubePlayer url="https://www.youtube.com/embed/o3XtQltGXPY?si=G9KTs5NIFrTcs-XH" controls light={Portada} />
                        </Flex>
                    </Box>
                    <Box m={50}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Descripción</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text whiteSpace='pre-wrap'>
                                        Tuned Boyer-Moore es una variación que funciona como una implementación más 
                                        simplificada y más eficiente del algoritmo de búsqueda de cadenas Boyer - Moore.
                                        Se caracteriza por ser mucho más rápido en el procesamiento de la cadena especialmente durante la
                                        práctica que consideran casos promedio de patrones, además es mucho más sencillo de implementar que su versión base.
                                    </Text>
                                    <br></br>
                                    <Text whiteSpace='pre-wrap'>
                                        El algoritmo puede verse como una implementación eficiente del algoritmo Horspool
                                        basándose en un patrón P de longitud m que se busca a lo largo de un
                                        texto T de longitud n, como objetivo principal busca determinar las posiciones con
                                        las coincidencias de los patrones a través de saltos ciegos que reducen la cantidad de comparaciones necesarias
                                        y permiten recorrer la cadena más rápidamente. Los saltos se realizan por medio de valores definidos
                                        para cada caracter del alfabeto admitido, estas posiciones son asignadas con las posiciones relativas
                                        de derecha a izquierda de los caracteres con prioridad en el que se encuentre más a la derecha del patrón.
                                    </Text>
                                    <Flex align='center' justify='center' m={20}>
                                        <Image src={Example} alt='Diagrama'/>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Autores</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                        El origen exacto de esta variación de Boyer Moore es un poco difuso 
                                        ya que no se le atribuye formalmente a ningún autor en específico y nació 
                                        por medio de varias modificaciones a través de múltiples trabajos de 
                                        investigación de la mano de diferentes autores que buscaban optimizar el algoritmo original.
                                    </Text>
                                    <br></br>
                                    <Text>
                                        Boyer Moore tiene una gran importancia por ser el punto de referencia estándar 
                                        para la búsqueda de cadenas prácticas. Fue desarrollado por Robert S. Boyer and 
                                        J Strother Moore en el año de 1977 fue descrito en un artículo titulado 
                                        “A Fast String Searching Algorithm” y publicado en Communications of the ACM.
                                    </Text>
                                    <HStack align='center' justify='center'>
                                            <Image src={Boyer} alt='Boyer' m={10}/>
                                            <Image src={Moore} alt='Moore' m={10}/>
                                    </HStack>      
                                    <Text>
                                        Ambos eran profesores de ciencias de la computación en la universidad de Texas 
                                        en Austin, gracias a la necesidad que existía de algoritmos de búsqueda de patrones 
                                        en cadenas de texto para el procesamiento de texto, compiladores y ciertos aplicativos 
                                        de búsqueda, dieron con la creación de este algoritmo.
                                    </Text>  
                                    <br></br>   
                                    <Text>
                                        Los algoritmos existentes como el algoritmo de Knuth-Morris=Pratt o el de fuerza bruta 
                                        era de los más usados pero contaba con ciertas limitaciones en términos de eficiencia, 
                                        por lo tanto ambos autores luego de algunas investigaciones y pruebas se percataron que 
                                        al comparar los patrones de derecha a izquierda era posible realizar saltos en el texto 
                                        disminuyendo así la cantidad de comparaciones.                                       
                                    </Text>                       
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>¿Patrones?</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                        En términos generales un patrón lo definimos como una serie de objetos 
                                        recurrentes o identificables entre un conjunto mayor de datos. Dichos 
                                        elementos cuentan con cierto comportamiento o secuencia constante que 
                                        los hacen identificables.
                                    </Text>
                                    <br></br>
                                    <Text>
                                        En el área de la computación los patrones son una secuencia concreta de caracteres, 
                                        símbolos y elementos, estos determinan una especificación de pautas que se esperan 
                                        sean seguidas por los datos durante algún proceso del programa por lo que son 
                                        identificables. 
                                    </Text>    
                                    <Flex align='center' justify='center' m={20}>
                                        <Image src={Patrones} alt='Patron'/>
                                    </Flex>
                                    <Text>
                                        Los patrones suelen ser almacenados en estructuras de datos en donde son identificados 
                                        con múltiples propósitos como la búsqueda, validación, modificación, etc. En el contexto 
                                        del String matching un patrón puede comprender una o varias cadenas de caracteres a buscar 
                                        dentro de un texto (un gran conjunto de caracteres).
                                    </Text>                                    
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Fases de Procesamiento</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Flex align='center' justify='center' m={20}>
                                        <Image src={Diagrama} alt='Diagrama'/>
                                    </Flex>
                                    <Divider my={10} borderColor="blue.500" />
                                    <OrderedList>
                                        <ListItem>
                                            <Heading as='h6' size='xs'>
                                                Fase de Inicilización de variables.
                                            </Heading> 
                                            <br></br>
                                            <Text>
                                                Antes de comenzar con el procesamiento de la cadena es 
                                                necesario inicializar nuestro arreglo con los saltos de 
                                                cada uno de los caracteres. Se determina el tamaño del 
                                                alfabeto que va a admitir el método, el valor más común 
                                                es de 256 un valor entero por cada carácter del alfabeto, 
                                                una vez creado el arreglo inicializaremos cada uno de los 
                                                valores con el valor del tamaño del patrón m.
                                            </Text>
                                            <Text>
                                                Ahora debemos asignar los saltos para cada uno de los caracteres 
                                                presentes en nuestro patrón, para ello asignaremos en el arreglo 
                                                previamente creado la posición relativa de derecha a izquierda 
                                                de la primera aparición de cada carácter a excepción del carácter 
                                                en la posición m-1 del patrón, este almacenara la segunda 
                                                aparición (si la tiene) del carácter.                                             
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example1} alt='Example1'/>
                                            </Flex>
                                            <Text>
                                                Una vez finalizado el proceso almacenamos en una variable auxiliar el valor 
                                                almacenado para el carácter en la posición m-1 del patrón y asignamos en el 
                                                arreglo la posición 0, además, con el fin de evitar cualquier desbordamiento 
                                                durante los saltos en la comparación se añade un centinela que agrega m caracteres 
                                                con el carácter final del patrón al final del texto. Con esto ya se puede comenzar 
                                                el análisis de la cadena de texto.                                             
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example3} alt='Example3'/>
                                            </Flex>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example4} alt='Example4'/>
                                            </Flex>
                                            <Divider my={10} borderColor="blue.500" />
                                        </ListItem>
                                        <ListItem>
                                            <Heading as='h6' size='xs'>
                                                Fase de Búsqueda.
                                            </Heading>  
                                            <br></br>                                                                                      
                                            <Text>
                                                Inicialmente el algoritmo comenzará a buscar coincidencias
                                                del caracter del apuntador j con el caracter de la posición 
                                                P[m - 1] del patrón a lo largo del texto, podríamos decir que esta
                                                es la parte más importante del algoritmo al igual que la
                                                más costosa, para evitar  hacer las comparaciones con demasiada
                                                frecuencia se hace uso de las rondas de tres cambios ciegos,
                                                los cambios ciegos son desplazamientos que se realizan sin
                                                comparaciones a través de la regla del mal carácter de Boyer-Moore con los
                                                valores previamente inicializados.
                                            </Text>
                                            <Text>
                                                La regla consiste en realizar desplazamientos en el puntero j a partir de los valores 
                                                registrados para cada carácter del patrón, se compara el carácter actual del puntero 
                                                con el carácter en la última posición del patrón, si estos no coinciden se realizan los 
                                                desplazamientos indicados en el arreglo en la posición del número ASCII del carácter 
                                                comparado. 
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example5} alt='Example5'/>
                                            </Flex>
                                            <Text>
                                                Por otro lado, si los caracteres coinciden comienza la siguiente fase.
                                            </Text>
                                            <Divider my={10} borderColor="blue.500" />
                                        </ListItem>
                                        <ListItem>
                                            <Heading as='h6' size='xs'>
                                                Fase de Comparación.
                                            </Heading>   
                                            <br></br>
                                            <Text>
                                                En esta fase comienzan a compararse todos los caracteres del patrón con
                                                los correspondientes del texto con ayuda del puntero para garantizar que sean 
                                                exactamente iguales comparando de izquierda a derecha, si durante la verificación no concuerda
                                                completamente se desplaza las posiciones indicadas en la variable auxiliar y se repite los pasos
                                                anteriores.
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example6} alt='Example6'/>
                                            </Flex>
                                            <Text>
                                                Por otro lado, si se trata de una coincidencia exacta entre el patrón y el texto se registra la 
                                                posición en la que se encuentra y luego se hace el mismo proceso con ayuda de la variable auxiliar 
                                                para posteriormente repetir el proceso.
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example7} alt='Example7'/>
                                            </Flex>          
                                            <Divider my={10} borderColor="blue.500" />                                 
                                        </ListItem>
                                    </OrderedList>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Ventajas</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList>
                                        <ListItem>Implementación sencilla</ListItem>
                                        <ListItem>Muy rápido en la práctica para los casos promedio</ListItem>
                                        <ListItem>Aprovechamiento de los intercambios ciegos</ListItem>
                                        <ListItem>Aprovechamiento de las reglas y ventajas de Boyer - Moore</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Desventajas</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList>
                                        <ListItem>Eficiencia dependiente del alfabeto</ListItem>
                                        <ListItem>Sobrecarga por caracteres</ListItem>
                                        <ListItem>Complejidad alta en el peor caso</ListItem>
                                        <ListItem>Rendimiento no uniforme</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </main>

            </Layout>

        </>
    );
}

export default Algorithm;