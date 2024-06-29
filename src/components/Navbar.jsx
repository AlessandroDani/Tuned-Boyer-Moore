import {
    Box,
    Button,
    Flex,
    Image,
} from "@chakra-ui/react";
import { Link } from "wouter";

function Navbar () {
    return (
        <>
            <Box margin={8}>
                <Flex
                    w="100%"
                    mx="auto"
                    as="header"
                    maxW="container.xl"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center">
                        <Image src="./logo.png" alt="Logo" w="30px" />
                        <Button 
                        href="/"
                        as={Link}
                        color="black"
                        size="md"
                        variant="none"
                        >
                            Search Pattern
                        </Button>
                    </Flex>

                    <Flex>
                        <>
                            <Box display="flex" justifyContent="space-between" alignItems='center'>
                                <Button
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Contact
                                </Button>
                                <Button
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Complexity
                                </Button>
                                <Button
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/algorithm"
                                >
                                    Algorithm
                                </Button>
                            </Box>
                        </>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Navbar;