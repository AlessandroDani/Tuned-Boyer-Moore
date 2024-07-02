import { Image, Divider,Text, Box, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, ListItem, OrderedList, UnorderedList, HStack } from '@chakra-ui/react'
import YoutubePlayer from 'react-player/youtube';
import Layout from '../components/Layout';
import Portada from '../assets/img/portadaVideo.png';
import Diagrama from '../assets/img/diagramaFlujo.png';
import Boyer from '../assets/img/Boyer.png';
import Moore from '../assets/img/Moore.png';
import Example from '../assets/img/exampleTBM.png';
import Patrones from '../assets/img/patrones.png';
import Example1 from '../assets/img/example1.png';
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
                                            <Heading as='h4' size='md'>Description</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text whiteSpace='pre-wrap'>
                                        Tuned Boyer-Moore is a variation that functions as a more simplified and efficient implementation 
                                        of the Boyer-Moore string search algorithm. It is characterized by being much faster in string 
                                        processing, especially in practical applications that consider average cases of patterns. 
                                        Additionally, it is much simpler to implement than its base version.
                                    </Text>
                                    <br></br>
                                    <Text whiteSpace='pre-wrap'>
                                        The algorithm can be seen as an efficient implementation of the Horspool algorithm based on a pattern 
                                        P of length m that is searched throughout a text T of length n. Its main objective is to determine the 
                                        positions with pattern matches through blind jumps that reduce the number of necessary comparisons and 
                                        allow the string to be traversed more quickly. The jumps are made using values defined for each character 
                                        of the accepted alphabet. These positions are assigned with the relative right-to-left positions of the 
                                        characters, prioritizing the one that is furthest to the right in the pattern.
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
                                            <Heading as='h4' size='md'>Authors</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                        The exact origin of this variation of Boyer-Moore is somewhat unclear, as it is not formally 
                                        attributed to any specific author. It emerged through various modifications in multiple research works 
                                        by different authors who sought to optimize the original algorithm.
                                    </Text>
                                    <br></br>
                                    <Text>
                                        Boyer-Moore is of great importance as the standard benchmark for practical string searching. It was 
                                        developed by Robert S. Boyer and J Strother Moore in 1977 and described in an article titled 
                                        "A Fast String Searching Algorithm," published in Communications of the ACM.
                                    </Text>
                                    <HStack align='center' justify='center'>
                                            <Image src={Boyer} alt='Boyer' m={10}/>
                                            <Image src={Moore} alt='Moore' m={10}/>
                                    </HStack>      
                                    <Text>
                                        Both were computer science professors at the University of Texas at Austin. Due to the need for 
                                        pattern search algorithms in text strings for text processing, compilers, and certain search applications, 
                                        they came up with the creation of this algorithm.
                                    </Text>  
                                    <br></br>   
                                    <Text>
                                        Existing algorithms such as the Knuth-Morris-Pratt algorithm or the brute force algorithm were among 
                                        the most used, but they had certain limitations in terms of efficiency. Therefore, after some research 
                                        and testing, both authors realized that by comparing patterns from right to left, it was possible to make 
                                        jumps in the text, thereby reducing the number of comparisons.                                    
                                    </Text>                       
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Patterns?</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                        In general terms, a pattern is defined as a series of recurring or identifiable objects within a 
                                        larger set of data. These elements have a certain consistent behavior or sequence that makes them 
                                        identifiable.
                                    </Text>
                                    <br></br>
                                    <Text>
                                        In the field of computing, patterns are a specific sequence of characters, symbols, and elements 
                                        that determine a set of rules expected to be followed by the data during some program process, 
                                        making them identifiable.
                                    </Text>    
                                    <Flex align='center' justify='center' m={20}>
                                        <Image src={Patrones} alt='Patron'/>
                                    </Flex>
                                    <Text>
                                        Patterns are usually stored in data structures where they are identified for multiple purposes 
                                        such as searching, validation, modification, etc. In the context of string matching, a pattern may 
                                        consist of one or several strings of characters to be searched within a text (a large set of characters).
                                    </Text>                                    
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Processing Phases</Heading>
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
                                                Variable Initialization Phase.
                                            </Heading> 
                                            <br></br>
                                            <Text>
                                                Before beginning with string processing, it is necessary to initialize our array 
                                                with the jumps for each of the characters. The size of the alphabet that the method 
                                                will admit is determined, with the most common value being 256, an integer value for 
                                                each character in the alphabet. Once the array is created, we initialize each of the 
                                                values with the size of the pattern m.
                                            </Text>
                                            <br></br>
                                            <Text>
                                                Now we need to assign jumps for each of the characters present in our pattern. To do this, 
                                                we will assign in the previously created array the relative right-to-left position of the first 
                                                occurrence of each character, except for the character at position ( m-1 ) in the pattern, 
                                                which will store the second occurrence (if any) of the character.                                          
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example1} alt='Example1'/>
                                            </Flex>
                                            <Text>
                                                Once the process is completed, we store the value stored for the character at position ( m-1 ) 
                                                of the pattern in an auxiliary variable. Then, we assign position 0 in the array. Additionally, 
                                                to prevent any overflow during jumps in the comparison, we add a sentinel that appends ( m ) 
                                                characters of the final character of the pattern to the end of the text. With this setup, we 
                                                can now begin analyzing the text string.                                          
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
                                                Search Phase.
                                            </Heading>  
                                            <br></br>                                                                                      
                                            <Text>
                                                Initially, the algorithm will begin searching for matches of the character at pointer j with the 
                                                character at position P[m - 1] of the pattern throughout the text. This can be considered the most 
                                                important and also the most costly part of the algorithm. To avoid making comparisons too frequently, 
                                                the algorithm uses rounds of three blind shifts. Blind shifts are displacements made without comparisons 
                                                using the Boyer-Moore bad character rule with the values previously initialized.
                                            </Text>
                                            <br></br>
                                            <Text>
                                                The rule involves shifting the pointer j based on the values stored for each character of the pattern. 
                                                It compares the current character at the pointer with the character in the last position of the pattern. 
                                                If these do not match, shifts are made according to the values indicated in the array at the position of 
                                                the ASCII number of the compared character.
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example5} alt='Example5'/>
                                            </Flex>
                                            <Text>
                                                On the other hand, if the characters match, the next phase begins.
                                            </Text>
                                            <Divider my={10} borderColor="blue.500" />
                                        </ListItem>
                                        <ListItem>
                                            <Heading as='h6' size='xs'>
                                                Comparison Phase.
                                            </Heading>   
                                            <br></br>
                                            <Text>
                                                In this phase, all characters of the pattern are compared with their corresponding characters in the text 
                                                using a pointer to ensure they match exactly, comparing from left to right. If there is any discrepancy during 
                                                this verification, the positions indicated in the auxiliary variable are shifted, and the previous steps are 
                                                repeated.
                                            </Text>
                                            <Flex align='center' justify='center' m={20}>
                                                <Image src={Example6} alt='Example6'/>
                                            </Flex>
                                            <Text>
                                                On the other hand, if there is an exact match between the pattern and the text, the position where it occurs 
                                                is recorded. Then, the same process is repeated with the help of the auxiliary variable to continue searching 
                                                for further occurrences in the text.
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
                                            <Heading as='h4' size='md'>Advantages</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList>
                                        <ListItem>Simple implementation</ListItem>
                                        <ListItem>Very fast in practice for average cases</ListItem>
                                        <ListItem>Utilizes blind shifts effectively</ListItem>
                                        <ListItem>Capitalizes on the rules and advantages of Boyer-Moore</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'blue.400', color: 'white' }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            <Heading as='h4' size='md'>Disadvantages</Heading>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList>
                                        <ListItem>Efficiency depends on the alphabet size</ListItem>
                                        <ListItem>Overhead due to characters</ListItem>
                                        <ListItem>High complexity in the worst case</ListItem>
                                        <ListItem>Non-uniform performance</ListItem>
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