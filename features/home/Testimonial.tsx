import React, { useState } from "react";
import { Box, Text, Image, Flex, Button, Center, Heading } from "@chakra-ui/react";
import {CgArrowLongLeft, CgArrowLongRight} from "react-icons/cg";
import { MainContainer } from "@/layouts/MainContainer";
import { TestimonialContent } from "@/constant";
import { MobileTestimonial } from "./MobileTestimonial";

export const Testimonial = () => {
  const [slideIndex0, setSlideIndex0] = useState(0);
  const [slideIndex1, setSlideIndex1] = useState(1);
  const [slideIndex2, setSlideIndex2] = useState(2);
  const [slideIndex3, setSlideIndex3] = useState(3);
  const [slideIndex4, setSlideIndex4] = useState(4);

 

  const handleNext = () => {
    if (slideIndex0 === 0) {
      setSlideIndex0(1);
      setSlideIndex1(2);
      setSlideIndex2(0);
    } else if (slideIndex0 === 1) {
      setSlideIndex0(2);
      setSlideIndex1(3);
      setSlideIndex2(1);
    } else if (slideIndex0 === 2) {
      setSlideIndex0(3);
      setSlideIndex1(4);
      setSlideIndex2(2);
    } else if (slideIndex0 === 3) {
      setSlideIndex0(4);
      setSlideIndex1(0);
      setSlideIndex2(3);
    } else if (slideIndex0 === 4) {
      setSlideIndex0(0);
      setSlideIndex1(1);
      setSlideIndex2(4);
    }
  };

  const handlePrev = () => {
    if (slideIndex0 === 0) {
      setSlideIndex0(4);
      setSlideIndex1(0);
      setSlideIndex2(1);
    } else if (slideIndex0 === 1) {
      setSlideIndex0(0);
      setSlideIndex1(1);
      setSlideIndex2(4);
    } else if (slideIndex0 === 2) {
      setSlideIndex0(1);
      setSlideIndex1(2);
      setSlideIndex2(3);
    } else if (slideIndex0 === 3) {
      setSlideIndex0(2);
      setSlideIndex1(3);
      setSlideIndex2(4);
    } else if (slideIndex0 === 4) {
      setSlideIndex0(3);
      setSlideIndex1(4);
      setSlideIndex2(0);
    }
  };

  return (
    <MainContainer>
        <Center
        display="flex"
        flexDirection="column"
        >
            <Heading 
            fontSize="35px" lineHeight="50.3px" color="brand.black"
            mb=".3125rem"
            >
            Testimonials
            </Heading>
            <Text
            fontSize="1.145rem"
            lineHeight="2.0938rem"
            color="brand.black"
            >
            Hear what they are saying about us
            </Text>
        </Center>
      <Box display={["none", "none", "flex", "flex"]} columnGap={"2.375rem"} py="4rem">
        {/* incativeboxleft */}
        <Box   onClick={()=> handlePrev()} w="40%" h="28.5rem" position="relative" borderRadius=".3125rem" cursor="pointer">
          {/* overlay */}
          <Box
             bg="#2E6B26CC"
            w="100%"
            h="100%"
            position="absolute"
            opacity="0.9"
            borderRadius=".3125rem"

          />
          {/* overlay */}
          <Center>
            <Box position="absolute" top={"50%"}>
              <Text fontSize="3rem" color="#fff">
                <CgArrowLongLeft/>
              </Text>
            </Box>
          </Center>
          <Box>
            <Image
             borderRadius="0.3125rem"
              h="28.5rem"
              w="100%"
              objectFit={"cover"}
              src={TestimonialContent[slideIndex1].image}
              alt="testimonial"
            />
          </Box>
        </Box>

        {/* activebox */}
        <Box>
          <Flex>
            <Box position="relative" maxW="40%" h="28.5rem">
              <Image
                w="100%"
                h="100%"
                objectFit={"cover"}
                src={TestimonialContent[slideIndex0].image}
                alt="testimonial"
              />
            </Box>
            <Box maxW="60%" p={["5.25rem 3.0625rem 5.375rem 2.4375em"]}>
              <Text fontSize="1.145rem" lineHeight="2.09375rem" mb="2.8125rem">
              {TestimonialContent[slideIndex0].testimony}
              </Text>

              <Text fontWeight="700" fontSize="1.125rem">    {TestimonialContent[slideIndex0].name}</Text>

              <Text fontWeight="500">{TestimonialContent[slideIndex0].role}</Text>
            </Box>
          </Flex>
        </Box>

        {/* inactiveboxright */}
        <Box  w="40%" h="28.5rem" position="relative"    onClick={()=> handleNext()}  borderRadius="0.3125rem"  cursor="pointer">
          {/* overlay */}
          <Box
            bg="#2E6B26CC"
            w="100%"
            h="100%"
            position="absolute"
            opacity="0.9"
            borderRadius="0.3125rem"
          />
          {/* overlay */}
          <Center>
            <Box position="absolute" top={"50%"}>
              <Text fontSize="3rem" color="#fff">
                <CgArrowLongRight />
              </Text>
            </Box>
          </Center>
          <Box>
            <Image
             borderRadius="0.3125rem"
              h="28.5rem"
              objectFit={"cover"}
              src={TestimonialContent[slideIndex2].image}
              alt="testimonial"
            />
          </Box>
        </Box>
      </Box>
      <Box display={["block", "block", "none", "none"]} mt="1.9312rem">
      <MobileTestimonial/>
      </Box>
    </MainContainer>
  );
};