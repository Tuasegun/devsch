import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { BlogInterface } from "@/constant";
export const ContentCard = ({
  title,
  authorName,
  duration,
  previewText,
  image,
}: BlogInterface) => {
  return (
    <Box
    cursor="pointer"
    >
      <Image src={image} alt={title} />
      <Box
      p={["1.9375rem 1.375rem 3.3125rem 1.6875rem"]}
      bg="#FAFAFA"
      >
      <Heading as="h3" size="md" mt="2rem" fontSize="1.125rem">
        {title}
      </Heading>
      <Text color="#434343" mt="1rem" fontSize="1.125rem" lineHeight={"28.8px"}>
        {previewText}
      </Text>
      <Text color="#434343" fontSize=".75rem" fontWeight={"500"} mt="1rem">
        {authorName} || <Text as="span" fontWeight="300">{duration} </Text> 
      </Text>
      </Box>
    
    </Box>
  );
};
