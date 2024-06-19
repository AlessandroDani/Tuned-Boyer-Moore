import { Image, Text, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import React from "react";
import YoutubePlayer from 'react-player/youtube';
import { Link } from "wouter";
import Layout from '../components/Layout';

function Algorithm() {
    return (
        <>
            <Layout>

                <main>
                    <section>
                        <Flex w="90%" gap={12} my={10} as="main" mx="auto" maxW="container.xl" alignItems="center" flexDir={{ base: "column", md: "row" }}>
                            <Box w={{ md: "50%" }} mx="auto" textAlign="center">
                                <Heading mb={4} size="xl" style={{ textWrap: "balance", }}>
                                    Tuned Boyer-Moore
                                </Heading>
                            </Box>
                        </Flex>
                        <Flex w="100%" justify="center" align="center">
                            <YoutubePlayer url="https://www.youtube.com/embed/uEfieI0MumY?si=2IaJfEhCeqDEfKqT" controls light="" />
                        </Flex>
                    </section>
                    <section>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Descripción
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Es una implementación más simplificada del algoritmo de Boyer - Moore
                                    el cual se caracteriza por ser mucho más rápido especialmente en la
                                    práctica durante los casos promedio además de ser más fácil de implementar.

                                    El algoritmo puede verse como una implementación eficiente del algoritmo Horspool
                                    basándose en un patrón P de longitud m que se busca a lo largo de un
                                    texto T de longitud n y cuyo objetivo es determinar las posiciones con
                                    las coincidencias.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Fases de Procesamiento
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <OrderedList>
                                        <ListItem>
                                            Localización del último carácter:
                                            <Text>
                                                Inicialmente el algoritmo comenzará a buscar coincidencias
                                                de P[m - 1] a lo largo del texto, podríamos decir que esta
                                                es la parte más importante del algoritmo al igual que la
                                                más costosa, para evitar  hacer las comparaciones con demasiada
                                                frecuencia se hace uso de las rondas de tres cambios ciegos,
                                                los cambios ciegos son desplazamientos que se realizan sin
                                                comparaciones a través de la regla del mal carácter de Boyer-Moore.

                                                La regla del mal carácter consiste en “desplazar” el patrón
                                                hacia la derecha para alinear los caracteres iguales cada vez
                                                que al comparar el carácter más a la derecha del patrón con el
                                                carácter actual del texto sean diferentes.

                                                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

                                                Si al comparar el carácter más a la derecha del patrón con el actual
                                                en el texto coinciden pasamos a la fase 2 de coincidencia

                                            </Text>
                                        </ListItem>
                                        <ListItem>
                                            Fase de coincidencia.

                                            <Text>

                                                En esta fase comienzan a compararse todos los caracteres del patrón con
                                                los correspondientes del texto para garantizar que sean exactamente iguales
                                                procediendo de derecha a izquierda, si durante la verificación no concuerda
                                                completamente se repite el proceso del mal carácter y se desplaza hasta
                                                recorrer todo el texto.

                                                Para la verificación del mal carácter se crea una tabla de mal carácter
                                                que determina la primera posición de derecha a izquierda del patrón para
                                                cada carácter y así definir los desplazamientos.

                                            </Text>
                                        </ListItem>
                                    </OrderedList>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Diagrama de Flujo
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Box boxSize='sm'>
                                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                                    </Box>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Ventajas
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
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Desventajas
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
                    </section>
                </main>

            </Layout>

        </>
    );
}

export default Algorithm;