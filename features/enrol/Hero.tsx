import { MainContainer } from "@/layouts/MainContainer";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";
import { EnrolFloat } from "./EnrolFloat";
import {useLayoutEffect, useRef} from "react";
import gsap from 'gsap'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const hero = heroRef.current
    let ctx = gsap.context(() =>{
      gsap.from(hero, { 
        opacity: '0',
        duration: 3,
        y: 0,
        delay: 1,
      })
    })
    return () => ctx.revert()
  })
  return (
    <MainContainer bg="brand.green.300">
      <Box
        display={["flex"]}
        flexDirection={["column", "column", "column", "column", "row"]}
        py="4.5rem"
        rowGap="3.875rem"
        justifyContent={"space-between"}
        ref={heroRef}
      >
        <Box maxWidth={["90%", "100%", "100%", "100%", "40%"]}>
          <Text
            bg="brand.green.200"
            display={"inline-flex"}
            p=".5rem 1.1062rem"
            alignItems="center"
            color="brand.green.400"
            borderRadius={".375rem"}
            fontSize=".9375rem"
            mb={["1.9375rem", "2.75rem"]}
          >
            <AiFillThunderbolt /> From beginner to professional level
          </Text>

          <Heading
            fontSize={["2rem", "2.375rem", "3.1125rem"]}
            lineHeight={["2.8rem", "3.0875rem", "3.9144rem"]}
            mb="2.25rem"
          >
            Learn frontend development skills 
          </Heading>

          <Text fontWeight={400} fontSize="18px" lineHeight="2.0938rem">
          Go from zero knowledge to being able to create the front-end interface of any website. Be able to build products in HTML, JavaScript, CSS and React Js framework
          </Text>
        </Box>
        <Box
          w={["100%", "100%", "100%", "100%", "100%"]}
          display={["block", "flex"]}
          justifyContent={"flex-end"}
          objectFit={"contain"}
          position="relative"
        >
          <Image
            maxW={["100%", "32.5rem"]}
            src="assets/images/enrol/heroImage.png"
            alt="hero"
          />

          <Box
            position="absolute"
            transform="translate(10%, -60%)"
            display={["none", "block"]}
          >
            <EnrolFloat
              image={"assets/images/enrol/heroPerson1.png"}
              name={"Olakunke"}
              content={
                "Schfordevs helped me build a strong confidence in my coding skills."
              }
            />
          </Box>

          <Box
            position="absolute"
            bottom="0"
            transform="translate(-180%, 0)"
            display={["none", "block"]}
          >
            <EnrolFloat
              image={"assets/images/enrol/heroPerson2.png"}
              name={"Tolani"}
              content={
                "Schfordevs gave me the best knowledge i need to become a frontend developer"
              }
            />
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </MainContainer>
  );
};
