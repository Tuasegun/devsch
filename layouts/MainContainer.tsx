import React, {PropsWithChildren} from 'react'
import {Box, Container} from '@chakra-ui/react'

interface MainContainerProps extends PropsWithChildren<{}> {
    bg?: string
    h?: string
    noMobilePadding?: boolean
}

export const MainContainer = ({children, bg, h, noMobilePadding}: MainContainerProps) => {
  return (
    <Box
    bg={bg || 'white'}
    h={h || 'auto'}
    >
        <Container
         px={noMobilePadding ? ['0', '0', '0', '1rem'] : '1rem'}
         maxW={
           noMobilePadding
             ? ['100%', '100%', '100%', 'container.xl']
             : 'container.xl'
         }
        >
            {children}
        </Container>
    </Box>
  )
}
