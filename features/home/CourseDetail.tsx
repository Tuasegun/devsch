import React from 'react'
import {Box, Heading, Image, Flex, Text, Button, SimpleGrid, VStack} from '@chakra-ui/react'
export const CourseDetail = () => {
  return (
   <Box
   display={"flex"}
   columnGap="4.1875rem"
   px={['1.2625rem', '1.5625rem', '1.5625rem', '5%', '5%']}
    flexDir={["column", "column", "column", "row"]}
    rowGap="3.153125rem"
   >
    <Box
    maxHeight="27rem"
    maxWidth={"30.625rem"}
    objectFit="contain"
    
    >
        <Image w="100%" h="100%" src="assets/images/home/CourseDetImg.png" alt="" />
    </Box>

    <Box>
        <Heading
        fontSize={["1.875rem" ,"2.1875em"]}
        >
            Course title
        </Heading>
        <Flex
        columnGap="1.8125rem"
        mt="2rem"
        display={["none", "flex"]}
        >
            <Flex
            columnGap="0.9375rem"
            >
                <Image w="1.25rem" src="assets/icons/bookIcon.svg" alt="detIcon"/>
                <Text fontSize={["1.145rem"]} color="#393939" fontWeight={"300"}>
                Front end development
                </Text>
            </Flex>
            <Flex  columnGap="0.9375rem">
                <Image w="1.25rem" src="assets/icons/clockIcon.svg" alt="detIcon"/>
                <Text  fontSize="1.145rem" color="#393939" fontWeight={"300"}>
                12 weeks
                </Text>
            </Flex>
            <Flex columnGap="0.9375rem">
            <Image  w="1.25rem" src="assets/icons/clockIcon.svg" alt="detIcon"/>
                <Text  fontSize="1.145rem" color="#393939" fontWeight={"300"}>
                6 weeks internship
                </Text>
            </Flex>
        </Flex>

        <SimpleGrid
        columns={2}
        justifyContent="space-between"
        mt="2rem"
        gridColumnGap={"1rem"}
        gridRowGap={"1.6875rem"}
        display={["grid", "none"]}
        >
            <VStack
            display={"flex-start"}
            rowGap={"0.8125rem"}
        
            >
                <Text
                color="brand.black"
                fontWeight="300"
                fontSize={"1rem"}
                >
                    Course:
                </Text>
                <Text
                 color="brand.black"
                 fontWeight="500"
                 fontSize={"1rem"}
                >
                Front end development
                </Text>
            </VStack>
            <VStack
             display={"flex-start"}
            rowGap={"0.8125rem"}
            
            >
                <Text
                 color="brand.black"
                 fontWeight="300"
                 fontSize={"1rem"}
                >
                    Course Duration:
                </Text>
                <Text
                color="brand.black"
                fontWeight="500"
                fontSize={"1rem"}
                >
               12 Weeks
                </Text>
            </VStack>
            <VStack
             display={"flex-start"}
            rowGap={"0.8125rem"}
            >
                <Text
                color="brand.black"
                fontWeight="300"
                fontSize={"1rem"}
                >
                   Internship
                </Text>
                <Text
                color="brand.black"
                fontWeight="500"
                fontSize={"1rem"}
                >
              6 Weeks
                </Text>
            </VStack>
        </SimpleGrid>

        <Box 
        mt="1.7rem">
            <Text fontSize={["1.125rem","1.145rem" ]}lineHeight={["170%","2.09375rem"]} color="#434343" fontWeight="300">
            Schfordevs provides the next generation of developers everything they need to succeed in a competitive landscape. From courses to build knowledge to products that dramatically improve your workflow. Schfordevs provides the next generation of developers everything they need to succeed in a competitive landscape. From courses to build knowledge to products that dramatically improve your workflow.
            </Text>
        </Box>

        <Flex
        columnGap={"1.25rem"}
        mt="1.75rem"
        flexDir={["column", "column", "column", "row"]}
        rowGap="1.5625em"
        >
            <Box
            bg="brand.green.200"
            p={["1rem","1.1875rem"]}
            borderRadius="0.375rem"
            >
                <Text
                color="#2E6B26"
                fontSize={["1.125rem","1.125rem"]}
                fontWeight={"300"}
                >
                You will earn an accredited certificate
                </Text>
            </Box>
            <Box
            
            
             display={["inline-flex", "block"]}
            >
                <Text
                color="#2E6B26"
                fontSize="1.125rem"
                fontWeight={"300"}
                bg="brand.green.200"
                p="1.1875rem"
                borderRadius="0.375rem"
                >
                You will be 100% job ready
                </Text>
            </Box>
        </Flex>

        <Flex
        mt="1.75rem"
        columnGap="1.513125rem"
        >
            <Box>
                <Button
                fontSize="1.27256875rem"
                borderRadius="0.44539875rem"
                >
                    See Details
                </Button>
            </Box>
            <Box>
                <Button
                bg="brand.white"
                color="brand.green.400"
                fontWeight={300}
                border="1px solid #2E6B26"
                borderRadius="0.44539875rem"
                fontSize="1.27256875rem"
                >
                    Enrol Now
                </Button>
            </Box>
        </Flex>
    </Box>
   </Box>
  )
}
