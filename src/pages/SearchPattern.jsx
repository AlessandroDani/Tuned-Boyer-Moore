import {
  Input,
  Box,
  Heading,
  Select,
  Divider,
  Center,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";

function SearchPattern({ inputValue }) {
  return (
    <>
      <Layout>
        <Box maxW='80vw' mx='auto' paddingTop={2}>
          <Text>
            {inputValue}
          </Text>
        <Center height="50px">
          <Divider borderColor="gray.400" orientation="horizontal" />
        </Center>
        <Box display={"flex"} justifyContent={"center"} p={3}>
          <Heading size="md">Find Pattern</Heading>
        </Box>
        <Box display="flex" flexDir="row" mx="auto" gap={2}>
          <Input bg="white" placeholder="Enter you pattern here" />
          <Select w="20%" bg="#699FD9" color="white">
            <option
              style={{ backgroundColor: "primary.600", color: "white" }}
              value="option1"
            >
              Star debugging
            </option>
            <option
              style={{ backgroundColor: "primary.600", color: "white" }}
              value="option2"
            >
              Run without debugging
            </option>
          </Select>
        </Box>
        </Box>
      </Layout>
    </>
  );
}

export default SearchPattern;
