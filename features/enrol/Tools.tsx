import React from "react";
import { Box, Text, Image, Flex, Button, Heading } from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
export const Tools = () => {
  return (
    <MainContainer>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "column", "row"]}
        py={[8, 8, 8, 8, 16]}
        rowGap={[8, 8, 8, 8, 0]}
      >
        <Box maxW={["100%", "35%"]}>
          <Heading>Learn with the industry’s best tools</Heading>

          <Text>
            We are proud to see our students getting development jobs, impacting
            teams with their skills and being paid well for their value. During
            your training you will learn how to use latest software's used for
            front end development
          </Text>
        </Box>
        <Box w={["100%", "60%"]}>
          <Box
            position="relative"
            display="flex"
            justifyContent="space-between"
          >
            <Box
              border="5px solid #3D7535"
              borderRadius="50%"
              padding="8px"
              boxSize="5.673125rem"
            >
              <Image
                borderRadius="50%"
                src="assets/images/enrol/html.png"
                alt="figma"
              />
            </Box>
            <Box
              border="5px solid #3D7535"
              boxSize="5.673125rem"
              borderRadius="50%"
              padding="8px"
            >
              <Image
                borderRadius="50%"
                src="assets/images/enrol/html2.png"
                alt="git"
              />
            </Box>
            <Box
              border="5px solid #3D7535"
              boxSize="5.673125rem"
              borderRadius="50%"
              padding="8px"
            >
              <Image
                borderRadius="50%"
                src="assets/images/enrol/css3.png"
                alt="github"
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Box
              border="5px solid #3D7535"
              borderRadius="50%"
              padding="8px"
              boxSize="5.673125rem"
            >
              <Image
                borderRadius="50%"
                src="assets/images/enrol/html.png"
                alt="figma"
              />
            </Box>

            <Box
              border="5px solid #3D7535"
              borderRadius="50%"
              padding="8px"
              boxSize="5.673125rem"
            >
              <Image
                borderRadius="50%"
                src="assets/images/enrol/html.png"
                alt="figma"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </MainContainer>
  );
};
