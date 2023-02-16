import React from 'react'
import { useRouter } from 'next/router'
import {Box, Flex, SimpleGrid, Text, Heading} from '@chakra-ui/react'
import { MainContainer } from '@/layouts/MainContainer'
import { BlogContents, BlogInterface } from '@/constant'
import { ContentCard } from './ContentCard'

export const RelatedArticles = () => {
    const router = useRouter()
    const {blogId} = router.query
    const [content, setContent] = React.useState<Array<BlogInterface>>([])
    //remove the current blog from the list of blogs using filter
    React.useEffect(() => {
        if(blogId){
            const filteredContent = BlogContents.filter(item => item.id  !== parseInt(blogId as string))
            setContent(filteredContent)
        }else{
            setContent(BlogContents)
        }
    }, [blogId])
  
  
  return (
    <MainContainer>
        <Box>
            <Text fontSize={"1.125rem"} fontWeight="700">
            Related articles    
            </Text>
        </Box>
        <Box mb="3.9256rem">
            <SimpleGrid columns={[1, 2, 3]} spacing="40px" mt="40px">
                {
                    content.slice(0, 3).map((item, index) => (
                        <ContentCard key={index} {...item} />
                    ))
                }
            </SimpleGrid>
        </Box>
    </MainContainer>
  )
}
