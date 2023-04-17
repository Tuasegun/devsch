import React, { useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, Button, Grid, Img, List, OrderedList,ListItem, Image } from '@chakra-ui/react'
import {MainContainer} from '@/layouts/MainContainer'
import { RiTimer2Line } from 'react-icons/ri'
import { AiOutlineCalendar } from 'react-icons/ai'
import { EventForm } from './EventForm'
import {eventContents} from '@/constant'
import gsap from 'gsap'

export const EventHero = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const tl = useRef<any>(gsap.timeline({ paused: true }))

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current
        .from('.ama-title', { opacity: 0, y: 100, duration: 0.5, delay: 0.5 })
        .from('.ama-main-title', { opacity: 0, y: 100, duration: 1 })
        .from('.ama-other-content', { opacity: 0, y: 100, duration: 1 })
        .from('.speaker-section', { opacity: 0, y: 100, duration: 1 })
        .from('.speaker-form', { opacity: 0, y: 100, duration: 1 })
        .from('.about-speaker', { opacity: 0, y: 100, duration: 1 })
        .play()
    }, mainRef)

    return () => ctx.revert()
  }, [])


  return (
    <MainContainer>
    <Box py="2rem" w="full" ref={mainRef}>
      <Grid
        w="full"
        templateColumns={['1fr', '1fr', '1fr', '1.5fr 1fr']}
        gap={12}
      >
        <Box>
                    <Text
                     bg="brand.green.200"
                     display={"inline-flex"}
                     p=".5rem 1.1062rem"
                     alignItems="center"
                     color="brand.green.400"
                     borderRadius={".375rem"}
                     fontSize=".9375rem"
                     mb={["1.9375rem","2.1875rem"]}
                     transform={"uppercase"}
                    >
                   Free AMA session
                    </Text>
          <Heading
            fontSize={{ base: '2.375rem', md: '2.375rem', lg: '3.125rem' }}
            color="brand.dark.100"
            lineHeight={'110%'}
            mb={{ base: 4, md: 4 }}
            className="ama-main-title"
          >
            {/* {bannerContent.mainTitle} */}
            {" "}{eventContents.subTitle}
          </Heading>
          <Flex
            className="ama-other-content"
            columnGap={{ base: '0.5rem', lg: '1.3rem' }}
            mt={'1rem'}
          >
            <Box
              color={'brand.gray.400'}
              display={'flex'}
              alignItems={'center'}
              columnGap={{ base: '0.3rem', lg: '0.5625rem' }}
            >
              <Text
                fontSize={{ base: '1rem', lg: '1.79875rem' }}
                fontWeight={'300'}
              >
                <RiTimer2Line />
              </Text>
              <Text
                fontSize={{ base: '0.7rem', lg: '.9356rem' }}
                fontWeight={'500'}
              >
                {eventContents.time}
              </Text>
            </Box>
            <Box
              color={'brand.gray.400'}
              display={'flex'}
              alignItems={'center'}
              columnGap={{ base: '0.3rem', lg: '0.5625rem' }}
            >
              <Text
                fontSize={{ base: '1rem', lg: '1.79875rem' }}
                fontWeight={'300'}
              >
                <AiOutlineCalendar />
              </Text>
              <Text
                fontSize={{ base: '0.7rem', lg: '.9356rem' }}
                fontWeight={'500'}
              >
                {eventContents.date}
              </Text>
            </Box>
            <Box
              color={'brand.gray.400'}
              display={'flex'}
              alignItems={'center'}
              columnGap={{ base: '0.3rem', lg: '0.5625rem' }}
            >
              <Box
                boxSize={{ base: '1rem', lg: '1.79875rem' }}
                fontWeight={'bold'}
              >
                <Img src="/assets/icons/gps.svg" alt="location" />
              </Box>
              <Text
                fontSize={{ base: '0.7rem', lg: '.9356rem' }}
                fontWeight={'500'}
              >
              {eventContents.location}
              </Text>
            </Box>
          </Flex>

          {/* speaker card */}
          <Box
            className="speaker-section"
            mt={{ base: 4, md: 16 }}
            mb={{ base: "2rem", md: 10 }}
            width={{ base: '100%', lg: '100%' }}

          >
            {/* <Image src="/assets/images/event/eventProduct.png" alt="speakerImg" /> */}
            <Text
              fontSize={{ base: '0.9rem', lg: '1.25rem' }}
              fontWeight={'bold'}
              color={'brand.gray.400'}
              textTransform={'uppercase'}
              mb={{ base: 2, md: 4 }}
            >
              Speaker:
            </Text>
            <Flex alignItems={'center'} columnGap={'0.725625rem'}>
              <Box>
                <Img
                boxSize={{ base: '5.1875rem', lg: '7.5rem' }}
                  borderRadius={'50%'}
                  src={eventContents.bannerImage}
                  alt="speakerImg"
                  objectFit="cover"
                  objectPosition={"center center"}
                />
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '1.10965rem', lg: '1.596875rem' }}
                  fontWeight={'bold'}
                  color={'brand.dark.100'}
                >
                 {eventContents.speakerName}
                </Text>
                <Text
                  fontSize={{ base: '0.806875rem', lg: '1.25rem' }}
                  color="#5F6368"
                >
                 {eventContents.speakerRole}
                </Text>
              </Box>
            </Flex>
          </Box>

          {/* event description */}
          <Box className="about-speaker">
            <Text
              fontSize={{ base: '0.9rem', lg: '1.25rem' }}
              fontWeight={'bold'}
              color={'brand.gray.400'}
              textTransform={'uppercase'}
              mb={{ base: 2, md: 4 }}
            >
              About Session:
            </Text>
            <Text
              fontSize={{ base: '0.941875rem', lg: '1.306875rem' }}
              color="brand.dark.200"
              lineHeight={{ base: '1.626875rem', lg: '2.2575rem' }}
            >
              {/* {bannerContent.description} */}
            {eventContents.description}
            </Text>
              <Text
              fontSize={{ base: '0.941875rem', lg: '1.306875rem' }}
              color="brand.dark.200"
              lineHeight={{ base: '1.626875rem', lg: '2.2575rem' }}
            >
              {eventContents.content1}
            </Text>
           
            <Text
              fontSize={{ base: '0.941875rem', lg: '1.306875rem' }}
              color="brand.dark.200"
              lineHeight={{ base: '1.626875rem', lg: '2.2575rem' }}
            >
              {eventContents.content2}
            </Text>

            <Text
              fontSize={{ base: '0.941875rem', lg: '1.306875rem' }}
              color="brand.dark.200"
              lineHeight={{ base: '1.626875rem', lg: '2.2575rem' }}
            >
              {eventContents.content3}
            </Text>

            
                    
          </Box>
        </Box>
        <Box>
          <EventForm />
        </Box>
      </Grid>
    </Box>
  </MainContainer>
  )
}
