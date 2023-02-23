import React, { useRef, useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  useStyleConfig,
} from "@chakra-ui/react";
import { TestimonialContent, perksContent } from "@/constant";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
export const MobileTestimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef<any>(null);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    rows: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    cssEase: "linear",
    arrows: true,
    beforeChange: (next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "30px",
        //   marginTop: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          {}
        }
        key={i}
      />
    ),
  };

  return (
    <Box pos="relative" overflow="hidden" pb="8rem">
      <Slider ref={slider} {...settings}>
        {TestimonialContent.map((item, index) => (
          <Box key={index} position="relative" mb="2.4312rem">
            <Box width="full" height={"20.625rem"} pos="relative">
              <Image
                w="100%"
                h="100%"
                objectPosition="top center"
                objectFit="cover"
                src={item.image}
                alt={item.name}
              />
            </Box>
            <Box
              bg="#FAFAFA;"
              borderRadius=".3125rem"
              pos="relative"
              py="2.9375rem"
              pl="1.1875rem"
            >
              <Text
                mb="2.5625rem"
                fontSize="1.125rem"
                fontWeight="300"
                lineHeight="1.9125rem"
              >
                {item.testimony}
              </Text>

              <Box>
                <Text
                  fontWeight="500"
                  fontSize="1.125rem"
                  lineHeight="170%"
                  mb=".6875rem"
                >
                  {item.name}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box display="flex">
        <Box 
        position="absolute"
        bottom="6%"
        >
          <Text color="#2E6B26" fontSize="30px" fontWeight={300}>
            <BsArrowLeftCircle onClick={previous} />
          </Text>
        </Box>
        <Box
         position="absolute"
         bottom="6%"
         right="0"
        >
          <Text color="#2E6B26" fontSize="30px" >
            <BsArrowRightCircle onClick={next} />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
