import React, {useLayoutEffect, useRef} from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import gsap from 'gsap'

import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Case = () => {
  const caseRef = useRef(null)

  useLayoutEffect(() => {
    const caseEl = caseRef.current
    let ctx = gsap.context(()=>{
      gsap.from(caseEl, {
        opacity: '0',
        duration: 2,
        y: 200,
        delay: 1,
        scrollTrigger: {
          trigger: caseEl,
        }
      })
    })
    return () => ctx.revert()
  })
  return (
    <MainContainer>
      <Flex
        justify="space-between"
        bg="#EEF8EC"
        p={["0", "1.875rem 1.875rem 2.8125rem 3.8125rem"]}
        alignItems="center"
        borderRadius="0.3125rem"
        my={["8.625rem", "3.875rem"]}
        flexDir={["column", "row"]}
        ref={caseRef}
      >
        <Box
          maxW={["100%", "50%"]}
          p={["3.25rem 0.5625rem 2.125rem 1.625rem", "0"]}
        >
          <Heading
            fontSize={["1.875rem", "2.4875rem"]}
            fontWeight="600"
            lineHeight={["2.4375rem", "3.2875rem"]}
            mb={["1.125rem", "1.125rem"]}
          >
            Build solutions around Real - life business cases
          </Heading>
          <Text
            fontSize={["1.125rem", "1.145rem"]}
            lineHeight={["2.09375rem", "1.9125rem"]}
          >
            You will be trained with real-life user and business problems to
            help you learn how to solve problems and deliver value with
            technology{" "}
          </Text>
        </Box>
        <Box
          boxSize={["100%", "100%", "27.3125rem", "27.3125rem"]}
          height="100%"
          objectFit="contain"
        >
          <Image
            borderLeft={["0", ".3125rem solid #3D7535"]}
            borderRadius="0.3125rem"
            src="assets/images/enrol/realLife.png"
          />
        </Box>
      </Flex>
    </MainContainer>
  );
};
