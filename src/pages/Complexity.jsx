import React from 'react';
import { Image, Flex, Tabs, Text, TabList, TabPanels, Tab, TabPanel, TabIndicator, Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box} from '@chakra-ui/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import Layout from '../components/Layout';
import BoxSyntax from '../components/BoxSyntax';
import BigOTBM from '../assets/img/bigoTDM.gif'
import BigOmemcmp from '../assets/img/bigOmemcmp.gif'
import BigOmemset from '../assets/img/bigOmemset.gif'
import BigOpreBMBC from '../assets/img/bigOpreBMBC.gif'



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
                    <Heading size='md'>Calculo del T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operaciones
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
                          Explicación
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ullam animi? Explicabo maxime consectetur, dolorem repellendus beatae nihil at quidem accusamus optio. Omnis, cum excepturi minus nam quasi sequi esse!
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
                    <Heading size='md'>Calculo del T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operaciones
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
                          Explicación
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ullam animi? Explicabo maxime consectetur, dolorem repellendus beatae nihil at quidem accusamus optio. Omnis, cum excepturi minus nam quasi sequi esse!
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
                    <Heading size='md'>Calculo del T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operaciones
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
                          Explicación
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ullam animi? Explicabo maxime consectetur, dolorem repellendus beatae nihil at quidem accusamus optio. Omnis, cum excepturi minus nam quasi sequi esse!
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
                    <Heading size='md'>Calculo del T(n)</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          Operaciones
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
                          Explicación
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ullam animi? Explicabo maxime consectetur, dolorem repellendus beatae nihil at quidem accusamus optio. Omnis, cum excepturi minus nam quasi sequi esse!
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Layout>

    );
    
};

export default Complexity;