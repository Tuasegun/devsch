
import React from 'react'
import { SimpleGrid,Box} from '@chakra-ui/react'
import { PerksCard } from './PerksCard'
import { perksContent } from '@/constant'
import {MainContainer} from '@/layouts/MainContainer'
export const Perks = () => {
  return (
    <Box
    py={["4.625rem","10.125rem"]}
    >
      <MainContainer>
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={["1.4375rem","8.9375em"]}>
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
