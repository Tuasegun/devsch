import React, { useLayoutEffect, useRef } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Tools = () => {
  const toolsRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tools = toolsRef.current;
    let ctx = gsap.context(() => {
      gsap.from(tools, {
        opacity: "0",
        duration: 2,
        y: 200,
        delay: 1,
        scrollTrigger: {
          trigger: tools,
        },
      });
    });
    return () => ctx.revert();
  });
  return (
    <MainContainer>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "column", "row"]}
        pb={["8.8125rem"]}
        rowGap={[8, 8, 8, 8, 0]}
        ref={toolsRef}
      >
        <Box maxW={["100%", "35%"]}>
          <Heading fontSize="2.1875rem" lineHeight="2.625rem">
            Learn with the industry’s best tools
          </Heading>

          <Text
            fontSize={[
              "1.125rem",
              "1.125rem",
              "1.145rem",
              "1.145rem",
              "1.145rem",
            ]}
            lineHeight={["33.5px"]}
          >
            During the training, you will be exposed to the best software
            development tools and how to use them to build products.
          </Text>
        </Box>
        <Box w={["100%", "60%"]}>
          <Box
            position="relative"
            display="flex"
            justifyContent="space-between"
          >
            <Center flexDirection="column">
              <Box border="1px solid #3D7535" borderRadius="50%" padding="8px">
                <Image
                  width="100%"
                  height="100%"
                  // borderRadius="50%"
                  boxSize={["4.1463rem", "5.673125rem"]}
                  src="assets/images/enrol/angular.png"
                  alt="figma"
                  objectFit="cover"
                />
              </Box>

              <Text mt="11px">Angular JS</Text>
            </Center>

            <Center flexDirection="column">
              <Box border="1px solid #3D7535" borderRadius="50%" padding="8px">
                <Image
                  boxSize={["4.1463rem", "5.673125rem"]}
                  src="assets/images/enrol/html2.png"
                  alt="git"
                />
              </Box>
              <Text mt="11px">HTML</Text>
            </Center>

            <Center flexDirection="column">
              <Box
              border="1px solid #3D7535"
                borderRadius="50%"
                padding="8px"
              >
                <Image
                   boxSize={["4.1463rem", "5.673125rem"]}
                  borderRadius="50%"
                  src="assets/images/enrol/css3.png"
                  alt="github"
                />
              </Box>
              <Text mt="11px">CSS</Text>
            </Center>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Center flexDirection="column">
              <Box border="1px solid #3D7535" borderRadius="50%" padding="8px">
                <Image
                  borderRadius="50%"
                  src="assets/images/enrol/react.png"
                  alt="figma"
                  objectPosition={"right center"}
                  boxSize={["4.1463rem", "5.673125rem"]}
                />
              </Box>
              <Text mt="11px">React</Text>
            </Center>

            <Center flexDirection="column">
              <Box border="1px solid #3D7535" borderRadius="50%" padding="8px">
                <Image
                  boxSize={["4.1463rem", "5.673125rem"]}
                  src="assets/images/enrol/cast.png"
                  alt="figma"
                />
              </Box>
              <Text mt="11px">Jquery</Text>
            </Center>
          </Box>
        </Box>
      </Flex>
    </MainContainer>
  );
};
