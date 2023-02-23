import React from "react";
import { Box, Text, Image, Flex, Button, Icon } from "@chakra-ui/react";
import { MainContainer } from "@/layouts/MainContainer";
import Link from "next/link";
import {RiMenu3Line} from 'react-icons/ri'
import {MdCancel} from 'react-icons/md'
import {HeaderDropdown} from './HeaderDropdown'
export const Header = ({isWhite = false}) => {
  const [showDropdown, setShowDropdown] = React.useState(false)
  return (
    <Box
   pos="sticky"
   bg={isWhite || showDropdown ? "#FFFFFF" : "brand.green.300"}
   top="0"
   w="100%"
   py="1.5625rem"
    zIndex="999"
    >
      <MainContainer
      bg="none"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box 
          h={["2.0981rem", "2.0981rem", "2.0981rem", "43px", "43px"]}
          w={["8.8125rem", "8.8125rem", "8.8125rem", "181px", "181px"]}
          >
           {
              showDropdown ? " " : <Image src="/assets/icons/schfordevslogo.svg" alt="logo" />
           }
          </Box>

          <Flex
            columnGap="60px"
            display={['none', 'flex']}
          >
            <Link href="/">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Home</Text>
            </Link>
            <Link href="/event">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Events</Text>
            </Link>
            <Link href="/blog">
              <Text
              fontSize="1.145rem"
              lineHeight="1.9725rem"
              fontWeight={300}
              >Blog</Text>
            </Link>
          </Flex>

          <Link href="/enrol">
          <Button
          py={[4, 4, 4, "1.8625rem", "1.8625rem"]}
          px={[8, 8, 8, "2.0rem", "2.0rem"]}
          display={['none', "flex"]}
          >View class plan</Button>
        </Link>

          <Icon 
          as = {showDropdown ? MdCancel : RiMenu3Line}
          display={['flex', 'none']}
          fontSize="2.1438rem"
          color="#2E6B26"
          onClick={() => setShowDropdown(!showDropdown)}
          />
         
  
        </Flex>
      </MainContainer>
      { showDropdown && <HeaderDropdown setShowDropdown={setShowDropdown} /> }

    </Box>
  );
};
