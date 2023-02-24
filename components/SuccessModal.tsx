import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Text,
  Button,
  Img,
} from '@chakra-ui/react'
import Link from 'next/link'
interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}
const SuccessModal = ({
  isOpen,
  onClose,
  title,
  description,
}: SuccessModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'xs', 'xs', 'xl']}>
        <ModalOverlay 
        bg="rgba(46, 107, 38, 0.7);"
        />

        <ModalContent>
          <ModalBody
            padding={['1.5rem', '1.5rem', '1.5rem', '2.6875rem 2.3125rem']}
          >
            <Link href="/">
              <ModalCloseButton
                backgroundColor={'#2E6B26'}
                rounded={'50%'}
                color={'#fff'}
                fontWeight={'700'}
              />
            </Link>
            <Center>
              <Box
                mb={['1rem', '1rem', '1rem', '1.4375rem']}
               
              >
                <Img border="5px solid #2E6B26" borderRadius="50%"  boxSize="9.8125rem" src="/assets/icons/modalcon.png" alt="success" />
              </Box>
            </Center>
            <Center>
              <Text
                textAlign={'center'}
                fontWeight={'700'}
                color={'#121212'}
                fontSize={['1rem', '1.5rem', '2.135625rem', '2.135625rem']}
                lineHeight={['1.5rem', '2.15rem', '2.603125rem', '2.500625rem']}
              >
                {title}
              </Text>
            </Center>
            <Center>
              <Text
                textAlign={'center'}
                fontWeight={'400'}
                color={'#121212'}
                fontSize={['1rem', '1.5rem', '2.135625rem', '1.5625rem']}
                lineHeight={['1.5rem', '2.15rem', '2.603125rem', '2.15rem']}
                mt={['1rem', '1rem', '1rem', '0.9375rem']}
              >
                {description}
              </Text>
            </Center>
            <Center>
              <Link href="/">
                <Button mt={['1rem', '1rem', '1rem', '1.4375rem']}>
                  Back to Home Page
                </Button>
              </Link>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SuccessModal
