import { MainContainer } from '@/layouts/MainContainer'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { AiFillThunderbolt } from 'react-icons/ai'
export const Hero = () => {
  return (
  
    <MainContainer
    bg="brand.green.300"
    
    >
        <Box
        display={['flex']}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        py="1.5625rem"
        rowGap="3.875rem"
        justifyContent={"space-between"}
        >
            <Box
          maxWidth={["90%", "100%", "100%", "100%", "40%"]}
            >
                    <Text
                     bg="brand.green.200"
                     display={"inline-flex"}
                     p="0.5rem 1.10625rem"
                     alignItems="center"
                     color="brand.green.400"
                     borderRadius={"0.375rem"}
                     fontSize="0.9375rem"
                     mb={["1.9375rem","2.75rem"]}
                    >
                  <AiFillThunderbolt/>{" "}From beginner to professional level
                    </Text>

                    <Heading
                    fontSize={["2rem","2.375rem","3.1125rem"]}
                    lineHeight={["2.8rem","3.0875rem","3.914375rem"]}
                    >
                    Start your Frontend Development Journey TODAY!
                    </Heading>

                    <Text
                    fontWeight={300}
                    
                    >
                    Go from zero knowledge to being able to build your technology platforms! Starting with the foundations of software engineering. By the end of this program you would have mastered a specialization and learn the art of effective collaboration to solve real world problems.
                    </Text>
            </Box>
                  <Box
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  display={["block","flex"]}
                  justifyContent={"flex-end"}
                  objectFit={"contain"}
                  >
                  <Image maxW={["100%", "32.5rem"]}  src="assets/images/enrol/heroImage.png" alt="hero" />
                  </Box>
            <Box>

            </Box>
        </Box>
        
    </MainContainer>
   
  )
}
