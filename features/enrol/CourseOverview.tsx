import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import { BsCheck } from "react-icons/bs";
import { CourseOverviewContents } from "@/constant";
import Link from 'next/link'
export const CourseOverview = () => {
  const content = CourseOverviewContents;
  return (
    <MainContainer>
      <Box
        display="flex"
        py="8.5625rem"
        columnGap={"1.3125rem"}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box maxW={["100%", "100$", "100%", "35%"]}>
          <Box
            bg="#F2F9F0"
            borderTop={"5px solid #3D7535"}
            padding={[
              "1.875rem 3.1875rem 2.125rem 2.875em",
              "1.875rem 7.1875rem 2.125rem 2.875em ",
            ]}
            mb="1.3125rem"
          >
            <Text fontSize={"1.125rem"} color="brand.black" fontWeight={400}>
              Price
            </Text>

            <Box
              padding={"20px 1.288125rem 0.5rem 0.875rem"}
              bg="#3D7535"
              display="inline-flex"
              mb="1.5625rem"
              boxShadow="4px 6px 0px 0px rgba(240,245,36,1)"
            >
              <Text
                fontSize={["1.875rem", "2.1875rem"]}
                color="brand.white"
                fontWeight={500}
              >
                {content.price}
              </Text>
            </Box>
            <Text mb="0.8rem" fontSize={["1.125rem"]} color="brand.black">
              Installmental Payment Options
            </Text>

            <Text
              fontSize={["1.375rem", "1.5625rem"]}
              fontWeight="500"
              pb="0rem"
            >
              {content.admission}
            </Text>

            <Text fontWeight="500" fontSize={["1.375rem", "1.5625rem"]}>
              {content.installment}
            </Text>
          </Box>
          <Box
            bg="#F2F9F0"
            borderTop={"5px solid #3D7535"}
            padding={[
              "1.875rem 5.1875rem 2.125rem 2.875em ",
              "1.875rem 9.1875rem 2.125rem 2.875em ",
            ]}
            mb="1.3125rem"
          >
            <Text fontSize={"1.125rem"} color="brand.black" fontWeight={400}>
              Schedule
            </Text>

            <Box
              padding={"20px 1.288125rem 0.5rem 0.875rem"}
              bg="#3D7535"
              display="inline-flex"
              mb="1.5625rem"
              boxShadow="4px 6px 0px 0px rgba(240,245,36,1)"
            >
              <Heading
                color="brand.white"
                fontWeight={500}
                fontSize={["1.875rem", "2.1875rem"]}
              >
                {content.courseDuration}
              </Heading>
            </Box>

            <Text
              fontSize={["1.375rem", "1.5625rem"]}
              fontWeight="500"
              pb="0rem"
            >
              {content.weekly}
            </Text>
            <Text
              fontSize={["1.375rem", "1.5625rem"]}
              fontWeight="500"
              pb="0rem"
            >
              {content.hourly}
            </Text>
          </Box>
          <Box
            bg="#F2F9F0"
            borderTop={"5px solid #3D7535"}
            padding={["1.875rem 2.1875rem 2.125rem 2.875em "]}
            mb="1.3125rem"
          >
            <Text
              fontSize={["1.375rem", "1.5625rem"]}
              fontWeight="500"
              pb="0rem"
            >
              {content.internshipDuration}
            </Text>
            <Text
              fontSize={["1.375rem", "1.5625rem"]}
              fontWeight="500"
              pb="0rem"
            >
              {content.internship}
            </Text>
          </Box>
          <Box
          display={['none', 'none', 'none', 'block']}
          >
            <Link href="/signup">
            <Button w="full"
            borderRadius="0"
            padding="2.3125rem"
            fontSize="30.36px"
            >
             Enroll for this plan
            </Button>
            </Link>
          </Box>
        </Box>
        <Box display={"flex"} w={["100%", "100%", "100%", "65%"]}>
          <Box
            padding={[
              "1.75rem 2% 0.625rem 1.575rem",
              "1.75rem 20% 0.625rem 2.875rem",
            ]}
            bg="#FAFAFA"
            w={["99%"]}
            maxHeight={["auto","870px"]}
            overflowY="scroll"
          >
            <Heading
              fontSize={["1.4375rem", "25px"]}
              color="brand.black"
              fontWeight={700}
              mb="1.0625rem"
              lineHeight="1.8313rem"
            >
              Course Overview
            </Heading>

            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
              mb="0.8125rem"
            >
              Understanding the web
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.understandWeb.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
              mb="0.8125rem"
            >
              Introduction to interface development
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {CourseOverviewContents.interfaceIntro.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
              Understanding the web
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.understandWeb2.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
             Introduction to interface development
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.interfaceDevelopment.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

          
            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
            Semantics and accessibility
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.semantics.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            
            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
        Semantics and accessibility
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.semantics2.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
       Introduction to javascript
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.introtojavascript.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            
            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
      Tooling
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.tooling.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
              Javascript framework: React
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content?.framework.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>


            <Heading
              fontSize={["1.25rem", "25px"]}
              color="brand.black"
              fontWeight={500}
            >
          Introduction to API
            </Heading>

            <Box mb="2.8125rem">
              <List spacing={3}>
                {content.apiIntro.map((item, index) => (
                  <ListItem fontSize="1.125rem" key={index}>
                    <ListIcon as={BsCheck} color="brand.green.400" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>


          </Box>
          <Box height={["auto","100%"]} width="1%" background="red">
            <Box
              height="33.3%"
              bg="#3D7535"
              px=".1563rem"
              w="100%"
              bgColor={"#3D7535"}
              borderTopRadius="5px"
            />
            <Box height="33.3%" bg="brand.yellow" px=".1563rem" />
            <Box
              height="33.4%"
              bg="#3D7535"
              px=".1563rem"
              borderBottomRadius="5px"
            />
          </Box>
        </Box>
        <Box
          display={['block', 'block', 'block', 'none']}
          >
            <Link href="/signup">
            <Button w="full"
            borderRadius="0"
            padding="2.3125rem"
            fontSize="1.875rem"
            >
             Enroll for this plan
            </Button>
            </Link>
          </Box>
      </Box>
    </MainContainer>
  );
};
