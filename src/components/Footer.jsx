import React from 'react'
import {Flex, Heading, Box, Stack, HStack, VStack, Divider, Image, Text, Button, IconButton, Link} from "@chakra-ui/react";
import logoSistemas from '../assets/img/logo_vertical_Sistemas.png';
import logoUFPS from '../assets/img/logoUFPS.png';

function Footer () {
    return (
        <footer className='page-footer'>
            <Box p={{ base: 20}} marginInline="auto" bg='white'>
                <Stack
                    spacing={{ base: 8, md: 0 }}
                    justifyContent="space-between"
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Box maxW="300px">
                        <HStack spacing="25px">

                            <Image src={logoUFPS} alt="Logo UFPS" w="150px" h="auto"  borderRadius="md"/>
                            <Image src={logoSistemas} alt="Logo Sistemas" w="125px" h="auto"  borderRadius="md"/>
                            
                        </HStack>
                    </Box>
                    <HStack
                    spacing={4}
                    d={{ base: 'none', sm: 'flex' }}
                    justifyContent={{ sm: 'space-between', md: 'normal' }}
                    >
                        <VStack spacing={4} alignItems="flex-start">
                            <Text fontSize="md" fontWeight="bold">
                                Pages 
                            </Text>
                            <VStack spacing={2} alignItems="flex-start" color="gray.500">
                                <Link>Algorithm</Link>
                                <Link>Complexity</Link>
                                <Link>Contact</Link>
                            </VStack>
                        </VStack>
                        <VStack spacing={4} alignItems="flex-start">
                            <Text fontSize="md" fontWeight="bold">
                                Contact
                            </Text>
                            <VStack spacing={2} alignItems="flex-start" color="gray.500">
                                <Link>Facebook</Link>
                                <Link>Twitter</Link>
                                <Link>LinkedIn</Link>
                                <Link>Instagram</Link>
                            </VStack>
                        </VStack>
                    </HStack>
                </Stack>
                <Divider my={4} />
                <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
                    <Text fontSize="md"></Text>
                    <Flex
                    as="footer"
                    py={8}
                    w="90%"
                    mx="auto"
                    maxW="container.xl"
                    justifyContent="center"
                    >
                        <Heading size="sm">
                            © {new Date().getFullYear()} - Analisis de Algoritmos
                        </Heading>
                    </Flex>
                </Stack>
            </Box>            
        </footer>
    )
}

export default Footer