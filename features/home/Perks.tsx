
import React from 'react'
import { SimpleGrid,Box} from '@chakra-ui/react'
import { PerksCard } from './PerksCard'
import { perksContent } from '@/constant'
export const Perks = () => {
  return (
    <Box
    py={["4.5rem","9.3125rem"]}
    px={['1.5625rem', '1.5625rem', '1.5625rem', '5%', '5%']}
    >
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={["1.4375rem","8.9375em"]}>
            {
                perksContent.map((perk, index) => (
                    <PerksCard key={index} {...perk} />
                ))
            }
        </SimpleGrid>
    </Box>
  )
}
