import React, {useLayoutEffect, useRef} from "react";
import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const CourseDetail = () => {
  const courseRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const course = courseRef.current
    let ctx = gsap.context(() =>{
      gsap.from(course, { 
        opacity: '0',
        duration: 3,
        y: 200,
        delay: 1,
        scrollTrigger: {
          trigger: course,
        }
      })
    })
    return () => ctx.revert()
  })
  return (
    <MainContainer>
      <Box
        display={"flex"}
        columnGap="4.1875rem"
        flexDir={["column", "column", "column", "row"]}
        rowGap="3.153125rem"
        pb={["4.625rem", "10.125rem"]}
        ref={courseRef}
      >
        <Box
          height={"auto"}
          // maxWidth={"30.625rem"}
          objectFit="contain"
          width={["100%", "40%"]}
        >
          <Image
            w="100%"
            h="100%"
            src="assets/images/home/CourseDetImg.png"
            alt=""
          />
        </Box>

        <Box width={["100%", "60%"]}>
          <Heading fontSize={["1.875rem", "2.1875em"]}>Course title</Heading>
          <Flex columnGap="1.8125rem" mt="2rem" display={["none", "flex"]}>
            <Flex columnGap="0.9375rem">
              <Image
                w="1.25rem"
                src="assets/icons/bookIcon.svg"
                alt="detIcon"
              />
              <Text fontSize={["1.145rem"]} color="#393939" fontWeight={"400"}>
                Front end development
              </Text>
            </Flex>
            <Flex columnGap="0.9375rem">
              <Image
                w="1.25rem"
                src="assets/icons/clockIcon.svg"
                alt="detIcon"
              />
              <Text fontSize="1.145rem" color="#393939" fontWeight={"400"}>
                12 weeks
              </Text>
            </Flex>
            <Flex columnGap="0.9375rem">
              <Image
                w="1.25rem"
                src="assets/icons/clockIcon.svg"
                alt="detIcon"
              />
              <Text fontSize="1.145rem" color="#393939" fontWeight={"400"}>
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
            <VStack display={"flex-start"} rowGap={"0.8125rem"}>
              <Text color="brand.black" fontWeight="300" fontSize={"1rem"}>
                Course:
              </Text>
              <Text color="brand.black" fontWeight="500" fontSize={"1rem"}>
                Front end development
              </Text>
            </VStack>
            <VStack display={"flex-start"} rowGap={"0.8125rem"}>
              <Text color="brand.black" fontWeight="300" fontSize={"1rem"}>
                Course Duration:
              </Text>
              <Text color="brand.black" fontWeight="500" fontSize={"1rem"}>
                12 Weeks
              </Text>
            </VStack>
            <VStack display={"flex-start"} rowGap={"0.8125rem"}>
              <Text color="brand.black" fontWeight="300" fontSize={"1rem"}>
                Internship
              </Text>
              <Text color="brand.black" fontWeight="500" fontSize={"1rem"}>
                6 Weeks
              </Text>
            </VStack>
          </SimpleGrid>

          <Box mt="1.7rem">
            <Text
              fontSize={["1.125rem", "1.145rem"]}
              lineHeight={["170%", "2.09375rem"]}
              color="#434343"
              fontWeight="400"
            >
              The frontend development training is designed to equip you with
              the skills to write codes in HTML, JAVASCRIPT, REACTJS to create
              the frontend of products - what the users can see and interact
              with. At the end of the training, you will be able to create the
              front-end interface of any website and be able to work with any
              team globally.
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
              p={["1.1875rem"]}
              borderRadius="0.375rem"
              display={["inline-flex", "block"]}
            >
              <Text
                color="#2E6B26"
                fontSize={["1rem", "1.125rem"]}
                fontWeight={"500"}
              >
                You will earn an accredited certificate
              </Text>
            </Box>
            <Box display={["inline-flex", "block"]}>
              <Text
                color="#2E6B26"
                fontSize={["1rem", "1.125rem"]}
                fontWeight={"500"}
                bg="brand.green.200"
                p="1.1875rem"
                borderRadius="0.375rem"
              >
                You will be 100% job ready
              </Text>
            </Box>
          </Flex>

          <Flex mt="1.75rem" columnGap={["0.5rem", "1.513125rem"]}>
           
           <Link href="/enrol">
            <Button
              py={["1.8125rem", "29.8px", "1.8625rem"]}
              px={["1.7rem", "20.3611px"]}
              fontSize={["1rem", "1.2725rem"]}
              w={["auto","213px"]}
            >
              See Details
            </Button>
            </Link>
            <Box>
            <Link href="/signup">
              <Button
                bg="brand.white"
                color="brand.green.400"
                fontWeight={400}
                border="1px solid #2E6B26"
                borderRadius="0.44539875rem"
                py={["1.8125rem", "29.8px", "1.8625rem"]}
                px={["1.7rem", "20.3611px"]}
                fontSize={["1rem","20.36px"]}
                display={["inline-flex", "flex"]}
              >
                Enrol Now
              </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </MainContainer>
  );
};
