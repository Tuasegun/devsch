import React, { useState, useRef, useLayoutEffect } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { MainContainer } from "@/layouts/MainContainer";
import { TestimonialContent } from "@/constant";
import { MobileTestimonial } from "./MobileTestimonial";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Testimonial = () => {
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [slideIndex0, setSlideIndex0] = useState(0);
  const [slideIndex1, setSlideIndex1] = useState(1);
  const [slideIndex2, setSlideIndex2] = useState(2);

  const handleNext = () => {
    if (slideIndex0 === 0) {
      setSlideIndex0(1);
      setSlideIndex1(2);
      setSlideIndex2(0);
    } else if (slideIndex0 === 1) {
      setSlideIndex0(2);
      setSlideIndex1(0);
      setSlideIndex2(1);
    } else if (slideIndex0 === 2) {
      setSlideIndex0(0);
      setSlideIndex1(1);
      setSlideIndex2(2);
    }
  };

  const handlePrev = () => {
    if (slideIndex0 === 0) {
      setSlideIndex0(2);
      setSlideIndex1(0);
      setSlideIndex2(1);
    } else if (slideIndex0 === 1) {
      setSlideIndex0(0);
      setSlideIndex1(1);
      setSlideIndex2(2);
    } else if (slideIndex0 === 2) {
      setSlideIndex0(1);
      setSlideIndex1(2);
      setSlideIndex2(0);
    }
  };

  useLayoutEffect(() => {
    const testimonial = testimonialRef.current
    let ctx = gsap.context(() =>{
      gsap.from(testimonial, { 
        opacity: '0',
        duration: 2,
        y: 200,
        delay: 1,
        scrollTrigger: {
          trigger: testimonial,
        }
      })
    })
    return () => ctx.revert()
  })

  return (
    <MainContainer>
      <Center display="flex" flexDirection="column" id="testimonials" ref={testimonialRef}>
        <Heading
          fontSize="35px"
          lineHeight="50.3px"
          color="brand.black"
          mb=".3125rem"
        >
          Testimonials
        </Heading>
        <Text fontSize="1.145rem" lineHeight="2.0938rem" color="brand.black">
          Hear what they are saying about us
        </Text>
      </Center>
      <Box
        display={["none", "none", "flex", "flex"]}
        columnGap={"2.375rem"}
        pt="4rem"
        ref={testimonialRef}
      >
        {/* incativeboxleft */}
        <Box
          onClick={() => handlePrev()}
          w="45%"
          h="28.5rem"
          position="relative"
          borderRadius=".3125rem"
          cursor="pointer"
        >
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
                <CgArrowLongLeft />
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
            <Box
              maxW="60%"
              p={["5.25rem 3.0625rem 5.375rem 2.4375em"]}
              bg="#FAFAFA"
            >
              <Text fontSize="1.145rem" lineHeight="2.09375rem" mb="2.8125rem">
                {TestimonialContent[slideIndex0].testimony}
              </Text>

              <Text fontWeight="700" fontSize="1.125rem">
                {" "}
                {TestimonialContent[slideIndex0].name}
              </Text>

            
            </Box>
          </Flex>
        </Box>

        {/* inactiveboxright */}
        <Box
          w="45%"
          h="28.5rem"
          position="relative"
          onClick={() => handleNext()}
          borderRadius="0.3125rem"
          cursor="pointer"
        >
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
        <MobileTestimonial />
      </Box>
    </MainContainer>
  );
};
