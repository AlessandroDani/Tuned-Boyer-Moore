import React from "react";
import Layout from "../components/Layout";
import {Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Text, Heading, Box, Image, Button, IconButton, HStack, UnorderedList, ListItem} from '@chakra-ui/react';
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
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                            />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Passionate about problem-solving and crafting well-designed software solutions.                             
                            </Text>
                            <br></br>
                            <UnorderedList>
                                <ListItem>I'm based in Colombia</ListItem>
                                <ListItem>You can contact me at alessandrodaniele07@gmail.com</ListItem>
                                <ListItem>I'm learning Spring Boot</ListItem>
                            </UnorderedList>   
                        </CardBody>
                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                            '& > button': {
                                minW: '100px',
                            },
                            }}
                        >
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            icon={<FaGithub />}
                            />
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            icon={<FaLinkedin />}
                            />
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            icon={<FaXTwitter />}
                            />
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            icon={<FaThreads />}
                            />
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
                            <IconButton
                                variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                            />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa, amet, libero placeat iste commodi dolorem provident dolore ipsam eum quis odio quidem. Dolores delectus est consequuntur a eaque aspernatur blanditiis quia, omnis accusamus iure atque beatae itaque ipsam ea dolore autem voluptatum iusto quasi cupiditate? Nobis quas corporis repellat?
                            </Text>
                        </CardBody>
                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                            '& > button': {
                                minW: '136px',
                            },
                            }}
                        >
                        <IconButton
                            variant='outline'
                            colorScheme='blue'
                            aria-label='Call Sage'
                            fontSize='20px'
                            icon={<FaGithub />}
                            />
                        </CardFooter>
                    </Card>  
                </HStack>
            </Flex>
        </Layout>

    );

};

export default Contact