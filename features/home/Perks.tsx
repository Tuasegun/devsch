
import React, {useRef, useLayoutEffect} from 'react'
import { SimpleGrid,Box} from '@chakra-ui/react'
import { PerksCard } from './PerksCard'
import { perksContent } from '@/constant'
import {MainContainer} from '@/layouts/MainContainer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Perks = () => {
  const perksRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const perks = perksRef.current
    let ctx = gsap.context(() =>{
      gsap.from(perks, { 
        opacity: '0',
        duration: 3,
        y: 200,
        delay: 1,
        scrollTrigger: {
          trigger: perks,
        }
      })
    })
    return () => ctx.revert()
  })
  return (
    <Box
    py={["4.625rem","10.125rem"]}
    >
      <MainContainer>
        <SimpleGrid ref={perksRef} columns={[1, 1, 1, 2, 3]} spacing={["1.4375rem","8.9375em"]}>
            {
                perksContent.map((perk, index) => (
                    <PerksCard key={index} {...perk} />
                ))
            }
        </SimpleGrid>
      </MainContainer>
    </Box>
  )
}
