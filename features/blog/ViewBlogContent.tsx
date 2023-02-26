import React, { useState } from "react";
import { useRouter } from "next/router";
import { MainContainer } from "@/layouts/MainContainer";
import { BlogContents, BlogInterface } from "../../constant";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  HStack,
  useClipboard,
  Tooltip,
} from "@chakra-ui/react";
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineLink,
  AiOutlineCheck,
} from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import {
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "next-share";
export const ViewBlogContent = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [content, setContent] = useState<BlogInterface[]>([]);

  const { hasCopied, onCopy } = useClipboard(
    `https://schfordevs.com/${blogId}`
  );

  React.useEffect(() => {
    if (blogId) {
      const contents = BlogContents.filter(
        (item: any) => item.id === parseInt(blogId as string)
      );
      setContent(contents);
    } else {
      setContent([]);
    }
  }, [blogId]);
  return (
    <MainContainer>
      <Box display="flex" flexDirection={"column"} pt="33px" pb="107px">
        <HStack mb={["2.9375rem", "12px"]} cursor={"pointer"}>
          <Text>
            <BsArrowLeft size={30} onClick={() => router.push("/blog")} />
          </Text>
          <Text fontSize={"18.32px"}>All blogs</Text>
        </HStack>

        <Heading
          as="h1"
          fontSize={["1.125rem", "2.625rem"]}
          mb="12px"
          color="#434343"
        >
          {content[0]?.title}
        </Heading>

        <Box
          width="full"
          height={["16.0119rem", "32.625rem"]}
          position="relative"
          mt="36px"
        >
          <Image
            height="100%"
            width={"100%"}
            objectFit={["cover", "contain"]}
            src={content[0]?.image}
            alt={content[0]?.title}
          />
        </Box>
        <Box position={"relative"} mt={["40px", "66px"]}>
          <Text fontSize={["1.125rem", "1.3125rem"]} mb="1.25rem">
            {content[0]?.content1}
          </Text>

          <Text
            mt="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            mb="1.25rem"
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content2}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content3}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content4}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content5}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content6}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content7}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content8}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content9}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content10}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content11}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content12}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content13}
          </Text>
          <Text
            mt="1.25rem"
            mb="1.25rem"
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["2.1938rem", "2.5594rem"]}
          >
            {content[0]?.content14}
          </Text>
        </Box>

        <Box>
          <Box>
            <Text
              fontSize={"18px"}
              fontWeight="700"
              lineHeight={"29.5392px"}
              mb="12px"
            >
              Share this article
            </Text>
          </Box>

          <Flex columnGap={"6px"}>
            <WhatsappShareButton
              url={`https://schfordevs.com/${blogId}`}
              title={content[0]?.title}
            >
              <Box bg="#EEF8EC" color="#2E6B26" p={[".5rem", ".8125rem"]}>
                <AiOutlineWhatsApp size={30} />
              </Box>
            </WhatsappShareButton>

            <TwitterShareButton
              url={`https://schfordevs.com/${blogId}`}
              title={content[0]?.title}
            >
              <Box bg="#EEF8EC" color="#2E6B26" p={[".5rem", ".8125rem"]}>
                <SlSocialTwitter size={30} />
              </Box>
            </TwitterShareButton>

            <LinkedinShareButton
              url={`https://schfordevs.com/${blogId}`}
              title={content[0]?.title}
            >
              <Box bg="#EEF8EC" color="#2E6B26" p={[".5rem", ".8125rem"]}>
                <AiOutlineLinkedin size={30} />
              </Box>
            </LinkedinShareButton>

            <Box>
                <Tooltip label={hasCopied ? "Copied to clipboard!" : "Copy Link"} bg="#2E6B26" color="#EEF8EC" placement="top">
              <Box
                bg="#EEF8EC"
                color="#2E6B26"
                p={[".5rem", ".8125rem"]}
                onClick={onCopy}
                cursor="pointer"
              >
                {hasCopied ? (
                  <AiOutlineCheck size={30} />
                ) : (
                  <AiOutlineLink size={30} />
                )}
              </Box>
              </Tooltip>
            </Box>
          </Flex>
        </Box>
      </Box>
    </MainContainer>
  );
};
