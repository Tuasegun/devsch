import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const HeaderDropdown = ({ setShowDropdown }: { setShowDropdown: any }) => {
  return (
    <Center w="full" h="calc(100vh - 4rem)" bg="brand.white">
      <Flex alignItems="center" gap="3.625rem" flexDir="column">
        <Link onClick={() => setShowDropdown(false)} href="/">
          <Text fontSize="xl">Home</Text>
        </Link>
        <Link onClick={() => setShowDropdown(false)} href="/events">
          <Text fontSize="xl">Events</Text>
        </Link>
        <Link onClick={() => setShowDropdown(false)} href="/blog">
          <Text fontSize="xl">Blog</Text>
        </Link>
      
        {/* change button content */}
        <Link onClick={() => setShowDropdown(false)} href="/enrol">
          <Button>View Class Plan </Button>
        </Link>
      </Flex>
    </Center>
  )
}
