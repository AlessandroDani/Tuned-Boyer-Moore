import React from 'react';
import { Image, Divider, Flex, Tabs, Text, TabList, TabPanels, Tab, TabPanel, TabIndicator, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Button} from '@chakra-ui/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import Layout from '../components/Layout';
import BoxSyntax from '../components/BoxSyntax';
import BigOTBM from '../assets/img/bigoTDM.gif'
import BigOmemcmp from '../assets/img/bigOmemcmp.gif'
import BigOmemset from '../assets/img/bigOmemset.gif'
import BigOpreBMBC from '../assets/img/bigOpreBMBC.gif'
import PDF from '../components/PDF'


SyntaxHighlighter.registerLanguage('javascript', js);

const Complexity = () => {

  const tunedBM = 

`const ASIZE = 256;

function TUNEDBM(x, m, y, n)
{

  let j, k, shift;
  const bmBc = new Array(ASIZE);

  preBmBc(x, m, bmBc);
  shift = bmBc[x.charCodeAt(m-1)];
  bmBc[x.charCodeAt(m-1)] = 0;

  y = memset(y,x[m-1],m);

  j = 0;

  while(j<n)
  {

    k = bmBc[y.charCodeAt(j + m - 1)];

    while(k !== 0)
    {
    
      j += k;
      k = bmBc[y.charCodeAt(j + m - 1)];
      j += k;
      k = bmBc[y.charCodeAt(j + m - 1)];      
      j += k;
      k = bmBc[y.charCodeAt(j + m - 1)];

    }

    if(j<n && memcmp(y, j, m, x))
    {

      console.log("Conincidencia encontrada en la posicion: " + j);

    }

    j+=shift;

  }

}`;

  const preBmBc =

`function preBmBc(x, m, bmBc) {

  for (let i = 0; i < ASIZE; ++i) {
    bmBc[i] = m;
  }

  for (let i = 0; i < m - 1; ++i) {
    bmBc[x.charCodeAt(i)] = m - i - 1;
  }

}`;

  const memset =

`function memset(y, character, m)
{

  let aux = '';

  for(let i = 0;i<m;i++)
  {

    aux += character;

  }

  return y + aux;

}`;

  const memcmp =

`function memcmp(y, j, m, x)
{

  for(let i = 0;i<m;i++)
  {

    if(y[j + i] !== x[i])
    {

      return false;

    }

  }

  return true;

}`;
    const [verPDF, setVerPDF] = React.useState(false);
    const ruta = '/a.pdf';

    return (
        <Layout>
          <Tabs position='relative' variant='unstyled'>
            <TabList>
              <Tab>TunedBM</Tab>
              <Tab>preBmBc</Tab>
              <Tab>memset</Tab>
              <Tab>memcmp</Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
            <TabPanels>
              <TabPanel>
                <BoxSyntax code={tunedBM} index={1}/>
                <Card m={15}>
                  <CardHeader>
                    <Heading size='md'>Calculation of T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operations
                        </Heading>
                        <Flex align='center' justify='center' m={20}>
                          <Image src={BigOTBM} alt='BigOTDM'/>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Big(O)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          O(σ + nm) || O(nm)
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Explanation
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          The worst-case scenario for the algorithm occurs when all characters in our text ( T ) are identical and match all characters in the pattern ( P ). In this case, comparisons and shifts are based on positions determined by the bad character rule. According to the established rules, shifts for this single character are very small, typically just one position, as it needs to check the pattern at each shift to ensure accuracy and record matches.
                        </Text>
                        <br></br>
                        <Text pt='2' fontSize='sm'>
                          Therefore, the auxiliary variable would have a value of 1, and the maximum shifts after each comparison are minimal, just one position. This causes the outer loop to iterate ( n ) (size of the text) times, and the inner loop with blind shifts to be constant, executing only once per iteration. This results in minimal pointer movements and necessitates more iterations. Additionally, since all characters are the same, the cycle responsible for comparing the pattern and the text is called in each iteration, with a complexity of ( m ) (the size of the pattern).
                        </Text>
                        <br></br>
                        <Text pt='2' fontSize='sm'>
                          It's important to clarify the algorithm's complexity. Due to the ( sigma ) iterations needed to determine shifts based on the alphabet size, the more accurate complexity of the algorithm is ( O(sigma + nm) ), where ( n ) is the size of the text and ( m ) is the size of the pattern. However, in practice, the alphabet size ( sigma ) is often constant when using the algorithm and only varies for very large and complex alphabets. Moreover, the ( sigma ) factor is much smaller compared to ( nm ) in average text searches.
                        </Text>
                        <br></br>
                        <Text pt='2' fontSize='sm'>
                          Therefore, certain articles and references simplify the worst-case complexity to ( O(nm) ), considering the alphabet size as a constant value. For our analysis, it's important to acknowledge both values, but we consider ( O(sigma + nm) ) to be more precise and suitable for practical purposes.
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <BoxSyntax code={preBmBc} index={2}/>
                <Card m={15}>
                  <CardHeader>
                    <Heading size='md'>Calculation of T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operations
                        </Heading>
                        <Flex align='center' justify='center' m={20}>
                          <Image src={BigOpreBMBC} alt='BigOTDM'/>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Big(O)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          O(σ + m)
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Explanation
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Method responsible for defining and initializing an array of integers to determine the shifts for each 
                          character in the accepted alphabet. This involves two iterations: one with a complexity of ( sigma ) 
                          based on the alphabet size, and another with a complexity of ( m ) based on the pattern size being searched. 
                          Initially, all values are assigned the size of the pattern ( m ). Then, for the characters present in the 
                          pattern, the values are replaced with the position of their first right-to-left occurrence in the pattern.
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <BoxSyntax code={memset} index={3}/>
                <Card m={15}>
                  <CardHeader>
                    <Heading size='md'>Calculation of T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operations
                        </Heading>
                        <Flex align='center' justify='center' m={20}>
                          <Image src={BigOmemset} alt='BigOTDM'/>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Big(O)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          O(m)
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Explanation
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Method responsible for adding a sentinel of size ( m ) to the text using only the final characters of the 
                          pattern. This is done to prevent any potential overflow during jumps in comparisons without affecting the 
                          search process. It accomplishes this through an iteration of size ( m ) and modifies the text accordingly.
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <BoxSyntax code={memcmp} index={4}/>
                <Card m={15}>
                  <CardHeader>
                    <Heading size='md'>Calculation of T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operations
                        </Heading>
                        <Flex align='center' justify='center' m={20}>
                          <Image src={BigOmemcmp} alt='BigOTDM'/>
                        </Flex>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Big(O)
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          O(m)
                        </Text>
                      </Box>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Explanation
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Method responsible for comparing the characters of the corresponding text fragment at the pointer with the 
                          characters of the pattern one by one. If an exact match is found, it returns a boolean value; if it's a 
                          partial match, it returns another boolean value. It performs a loop with ( m ) iterations to compare all 
                          characters in the pattern.
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box mx={10}>
            <Divider  borderColor="blue.500" />
            <Card m={15}>
              <CardHeader>
                  <Heading size='md'>PDF - Big(O) Complexity and T(n) Calculations</Heading>
              </CardHeader>
              <CardBody>
                <Box>
                  <Button
                    variant="ghost"
                    bg='yellow.100'
                    onClick={() => {
                      setVerPDF(!verPDF);
                    }}
                  >
                    {verPDF ? "Hide PDF" : "View PDF"}
                  </Button>
                  {ruta ? (

                    <>                    
                      {verPDF ? (
                        <Box p={15}>
                          <PDF/>
                        </Box>
                      ) : null}
                    </>
                  ) : null}
                </Box>
                <a href={ruta} download="Costo Algoritmico Tuned Boyer Moore (1152298 - 1152194).pdf">
                  <Button mt={15} variant="ghost" bg='blue.500'>Download pdf</Button>
                </a>
              </CardBody>
            </Card>            
          </Box>
        </Layout>

    );
    
};

export default Complexity;