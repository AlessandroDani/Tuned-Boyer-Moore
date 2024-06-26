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
                            <Box display="flex" justifyContent="space-between">
                                <Button
                                    margin={10}
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Contact
                                </Button>
                                <Button
                                    margin={10}
                                    color="black"
                                    variant="none"
                                    size="sm"
                                    as={Link}
                                    href="/home"
                                >
                                    Complexity
                                </Button>
                                <Button
                                    margin={10}
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