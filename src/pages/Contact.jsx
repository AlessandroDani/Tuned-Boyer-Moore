import Layout from "../components/Layout";
import {Card, Link, CardHeader, CardBody, CardFooter, Flex, Avatar, Text, Heading, Box, IconButton, HStack, UnorderedList, ListItem} from '@chakra-ui/react';
import ProfileIMG1 from '../assets/img/alessandro.jpg'
import ProfileIMG2 from '../assets/img/juan.jpeg'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {FaXTwitter, FaThreads} from 'react-icons/fa6';


function Contact () 
{

    return(

        <Layout>
            <Flex justify='center' align='center' m={15}>
                <HStack>
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Alessandro Daniele' src={ProfileIMG1} />
                                <Box>
                                    <Heading size='sm'>Alessandro Umberto Daniele Saltarin</Heading>
                                    <Text fontSize='xs'>System Engineering student and junior developer</Text>
                                </Box>
                            </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Passionate about problem-solving and crafting well-designed software solutions.                             
                            </Text>
                            <br></br>
                            <UnorderedList>
                                <ListItem>I&apos;m based in Colombia</ListItem>
                                <ListItem>You can contact me at alessandrodaniele07@gmail.com</ListItem>
                                <ListItem>I&apos;m learning Spring Boot</ListItem>
                            </UnorderedList>   
                        </CardBody>
                        <CardFooter
                            sx={{
                            '& > button': {
                                minW: '200px',
                            },
                            }}
                        >
                            <Link href='https://github.com/AlessandroDani'>
                                <IconButton
                                    variant='outline'
                                    colorScheme='teal'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<FaGithub />}
                                    />
                            </Link>
                            <Link href='https://www.linkedin.com/in/alessandro-umberto-daniele-saltarin-aa9b82252/'>
                                <IconButton
                                    variant='outline'
                                    colorScheme='teal'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<FaLinkedin />}
                                    />
                            </Link>
                            <Link href='https://x.com/SandroDaniele07'>
                                <IconButton
                                    variant='outline'
                                    colorScheme='teal'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<FaXTwitter />}
                                    />                        
                            </Link>
                            <Link href='https://www.threads.net/@danielealessandro07'>
                                <IconButton
                                    variant='outline'
                                    colorScheme='teal'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<FaThreads />}
                                    />
                            </Link>
                        </CardFooter>
                    </Card>     
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Juan Ortiz' src={ProfileIMG2} />
                                <Box>
                                    <Heading size='sm'>Juan David Ortiz Cano</Heading>
                                    <Text>System Engineering student</Text>
                                </Box>
                            </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Systems engineering student, interested in learning new growing technologies. Looking to improve 
                                as a person and professional
                            </Text>
                            <br></br>
                            <UnorderedList>
                                <ListItem>You can contact me at juandavidorca@ufps.edu.co</ListItem>
                                <ListItem>I&apos;m learning React, Web development, Chakra</ListItem>
                            </UnorderedList>                              
                        </CardBody>
                        <CardFooter
                            sx={{
                            '& > button': {
                                minW: '136px',
                            },
                            }}
                        >
                            <Link href='https://github.com/Juan1806y'>
                                <IconButton
                                    variant='outline'
                                    colorScheme='blue'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<FaGithub />}
                                />
                            </Link>                            
                        </CardFooter>
                    </Card>  
                </HStack>
            </Flex>
        </Layout>

    );

}

export default Contact