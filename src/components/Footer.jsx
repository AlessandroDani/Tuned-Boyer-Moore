import React from 'react'
import {Flex, Heading} from "@chakra-ui/react";
import { Link } from "wouter";

function Footer () {
    return (
        <footer className='page-footer'>
            <Flex
                as="footer"
                py={8}
                w="90%"
                mx="auto"
                maxW="container.xl"
                justifyContent="center"
            >
                <Heading size="sm">
                    © {new Date().getFullYear()} - Analisis de Algoritmo
                </Heading>
            </Flex>
        </footer>
    )
}

export default Footer