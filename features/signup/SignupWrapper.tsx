import React from 'react'
import { SideImage } from './SideImage'
import {SignupForm} from './SignupForm'
import { Box,SimpleGrid } from '@chakra-ui/react'

export const SignupWrapper = () => {
  return (
   <SimpleGrid columns={[1,1,1,2]} spacing="0" h="100vh">
        <SideImage/>
        <SignupForm/>
    </SimpleGrid>
  )
}
