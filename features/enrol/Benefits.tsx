import React, {useLayoutEffect, useRef} from 'react'
import { Box, Text, Image, Flex, List, ListItem, ListIcon} from '@chakra-ui/react'
import {BsCheck} from 'react-icons/bs'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const benefits = [
    "Beginner friendly",
    "Practical training",
    "Learn from industry experts",
]

export const Benefits = () => {
    const benefitsRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        const benefits = benefitsRef.current
        let ctx = gsap.context(() =>{
            gsap.from(benefits, { 
                opacity: '0',
                duration: 2,
                y: 0,
                delay: 1,
                scrollTrigger: {
                    trigger: benefits,
                }
            })
        })
        return () => ctx.revert()
    })

  return (
    <Box
    bg="brand.green.400"
    bgImage={"url('/assets/images/enrol/benBgPattern.png')"}
    py="2.5rem"
    px={['1.5625rem', '1.5625rem', '1.5625rem', '10%', '10%']}
    ref={benefitsRef}
    >
        <Box>
            <List
            display={"flex"}
            flexDirection={['column', 'column', 'column', 'column', 'row']}
            alignItems={"center"}
            flexDir={['column', 'column', 'column', 'column', 'row']}
            justifyContent={"space-between"}

            >
                {
                benefits.map((benefit, index) => (
                    <ListItem
                    key={index}
                    display={"flex"}
                    alignItems={"center"}
                    fontSize={["1.125rem", "1.125rem", "1.125rem", "1.125rem", "1.5625rem"]}
                    color="brand.white"
                    >
                        <ListIcon as={BsCheck} color="brand.white" />
                        <Text>
                            {benefit}
                        </Text>
                    </ListItem>
                ))
                }
            </List>
        </Box>
    </Box>
  )
}
