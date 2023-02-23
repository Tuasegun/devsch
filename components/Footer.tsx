import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    Link,
    SimpleGrid,
    Text,
    VStack,
    Image,
    Input,
  } from '@chakra-ui/react'
  import React from 'react'
  import { FooterSocialLinks, links } from '../constant'
 import {MainContainer} from '../layouts/MainContainer'
//   import Logo from './Logo'
  import { useRouter } from 'next/router'
  
  
 export const Footer = () => {
    const router = useRouter()
    return (
      <MainContainer bg="brand.green.300">
        <Box py="1.875rem">
          <Flex
            bg="brand.green.400"
            px={["1rem","3rem"]}
            py="1.5rem"
            borderRadius="10px"
            alignItems= {["center","center","center","center"]}
            justifyContent="space-between"
            flexDirection={['column', 'column', 'row', 'row']}
            display={['flex', 'flex', 'flex', 'flex']}
            mb={"3.8125rem"}
          >
            <Text fontSize={["1.2925rem","4xl"]} color="brand.white" fontWeight="bold" mb={["18px", "0"]}>
            Ready to talk? We're here to help
            </Text>
  
            <Button
              as={Link}
              href="/enrol"
              _hover={{ textDecor: 'none', bg: 'brand.yellow.500' }}
              bg="brand.white"
              color="brand.green.400"
              py={[4, 4, 4, "1.8625rem", "1.8625rem"]}
              px={"3.625rem"}
              fontSize="20.36px"
            >
              Enroll Now
            </Button>
          </Flex>

          <Box mb={["1.6725rem", "0"]} width={["8.8125rem", "181px"]} height={["2.0981rem", "2.6938rem"]}>
            <Image objectFit="contain" src="/assets/icons/schfordevslogo.svg" alt="logo" />
          </Box>
  
          {/* links */}
          <Grid
            display={['none', 'none', 'none', 'grid']}
            mt="4.125rem"
            templateColumns="repeat(6, 1fr)"
            gap={5}
          >
            <GridItem colSpan={3} w="100%">
              {/* <Logo color="white" /> */}
  
              <Text
                mt="0.75rem"
                fontWeight={300}
                fontSize="1.145rem"
                lineHeight="2.09375rem"
                maxW="366px"
                color="#434343"
              >
               Schfordevs provides the next generation of developers everything they need to succeed in a competitive  Schfordevs provides the next generation of developers everything they.
              </Text>
  
              <Flex alignItems="center" gap="0.75rem" mt="1.875rem">
                {FooterSocialLinks.map(({ name, url, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer">
                    <Center
                      w="1.875rem"
                      h="1.875rem"
                      bg="brand.white"
                      rounded="full"
                      _hover={{ bg: 'brand.yellow.500' }}
                    >
                      <Icon
                        as={icon}
                        w="0.875rem"
                        h="0.875rem"
                        fontSize="0.875rem"
                        color="brand.purple.500"
                      />
                    </Center>
                  </a>
                ))}

              </Flex>
            </GridItem>
            {links.map(({ title, links }) => (
              <GridItem key={title} colSpan={1} w="100%">
                <Text color="brand.black" fontSize="1.125rem" fontWeight="bold">
                  {title}
                </Text>
  
                <VStack mt="1.5rem" spacing="1.25rem">
                  {links.map(({ name, url }) => (
                    <Link
                      target={name === 'Community' ? '_blank' : '_self'}
                      w="full"
                      key={name}
                      href={url}
                    >
                      <Text
                        w="full"
                        textAlign="left"
                        fontSize="0.875rem"
                        color="brand.black"
                        _hover={{ color: 'brand.yellow.500' }}
                      >
                        {name}
                      </Text>
                    </Link>
                  ))}
                </VStack>
          
              </GridItem>
            ))}
              <GridItem colSpan={2} w="100%">
                <Text color="brand.black" fontSize="1.125rem" fontWeight="bold" mb="1.375rem">
                    News Letter
                </Text>
                <Text
                fontSize="1.145rem"
                mb=".9625rem"
                >
                Get real time update from us
                </Text>
                <Flex>
                    <Input placeholder="Email Address"  
                      type="email"
                      background="#fff"
                      border="0px"
                      width="60%"
                    />
                    <Button
                    width="40%"
                    fontSize="1.125rem"
                    fontWeight="400"
                    borderRadius="0"
                    >Subscribe</Button>
                </Flex>
              </GridItem>
          </Grid>
  
          {/* mobile cta. */}
          <VStack
            display={['flex', 'flex', 'flex', 'none']}
            alignItems="flex-start"
            spacing="1.25rem"
          >
            <Heading
              textAlign="left"
              fontSize={['1.125rem', '1.125rem']}
              maxW="100%"
              fontWeight={400}
              color="brand.black"
            >
              Schfordevs provides the next generation{' '}
              <Box as="span" color="brand.yellow.500">
                {' '}
                of developers everything they need to succeed in a competitive  
              </Box>{' '}
              Schfordevs provides the next generation of developers everything they.
            </Heading>
  
            <Box mt="1.5rem" display={['block', 'block', 'block', 'none']}>
{/*              
              <Button
                bg="brand.bla"
                color="brand.purple.500"
                // onClick={() => router.push("/enrol")}
              >
                Get Started
              </Button> */}
             
            </Box>
          </VStack>
  
          <SimpleGrid
            display={['grid', 'grid', 'grid', 'none']}
            mt="2.5rem"
            columns={1}
            gap="1rem"
          >
            <VStack alignItems="flex-start">
              <Text
                fontSize="1rem"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                textAlign="left"
              >
                Quick Links
              </Text>
  
              <Link w="full" target="_blank" href="mailto: perxels@gmail.com">
                <Text
                  w="full"
                  fontSize={['lg', 'xl', '2xl']}
                  textAlign="left"
                  color="brand.black"
                  _hover={{ color: 'brand.black' }}
                >
                  Course Overview
                </Text>
              </Link>
              <Link w="full" target="_blank" href="mailto: perxels@gmail.com">
                <Text
                  w="full"
                  fontSize={['lg', 'xl', '2xl']}
                  textAlign="left"
                  color="brand.black"
                  _hover={{ color: 'brand.black' }}
                >
                  Testimonials
                </Text>
              </Link>
              <Link w="full" target="_blank" href="mailto: perxels@gmail.com">
                <Text
                  w="full"
                  fontSize={['lg', 'xl', '2xl']}
                  textAlign="left"
                  color="brand.black"
                  _hover={{ color: 'brand.black' }}
                >
                  Blog
                </Text>
              </Link>
              <Link w="full" target="_blank" href="mailto: perxels@gmail.com">
                <Text
                  w="full"
                  fontSize={['lg', 'xl', '2xl']}
                  textAlign="left"
                  color="brand.black"
                  _hover={{ color: 'brand.black' }}
                >
                  Event
                </Text>
              </Link>
              <Link w="full" target="_blank" href="mailto: perxels@gmail.com">
                <Text
                  w="full"
                  fontSize={['lg', 'xl', '2xl']}
                  textAlign="left"
                  color="brand.black"
                  _hover={{ color: 'brand.black' }}
                >
                 Join Community
                </Text>
              </Link>
            </VStack>
            <VStack alignItems="flex-start">
              <Text
                fontSize="1rem"
                fontWeight="600"
                color="brand.black"
                textTransform="uppercase"
                textAlign="left"
              >
                NewsLetter
              </Text>
              
              <Flex>
                    <Input placeholder="Email Address"  
                      type="email"
                      background="#fff"
                      border="0px"
                      width="60%"
                    />
                    <Button
                    width="40%"
                    fontSize="1.125rem"
                    fontWeight="400"
                    borderRadius="0"
                    >Subscribe</Button>
                </Flex>
            </VStack>
          </SimpleGrid>
  
         
          <Text
            textAlign="left"
            fontSize="lg"
            mt={['3.125rem', '3.125rem', '5rem']}
            mb="1.5rem"
            color="brand.black"
          >
            © Perxels 2023, All Rights Reserved.
          </Text>
        </Box>
      </MainContainer>
    )
  }
  
