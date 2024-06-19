import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
} from "@chakra-ui/react";
import { Link } from "wouter";

function Navbar () {
    return (
        <>
            <Box>
                <Flex
                    w="100%"
                    mx="auto"
                    as="header"
                    maxW="container.xl"
                    justifyContent="space-between"
                >
                    <Flex alignItems="center" gap={4}>
                        <Image src="./logo.jpeg" alt="Logo" w="30px" />
                        <Heading color="black" size="md">
                            Search Pattern
                        </Heading>
                    </Flex>

                    <Flex>
                        <>
                            <Box display="flex" justifyContent="space-between">
                                <Button
                                    padding={10}
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Contact
                                </Button>
                                <Button
                                    padding={10}
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Complexity
                                </Button>
                                <Button
                                    padding={10}
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