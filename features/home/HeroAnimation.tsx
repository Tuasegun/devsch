import React, {useState, useEffect, useRef} from 'react'
import {Box, Image, Text} from '@chakra-ui/react'

export const HeroAnimation = () => {
    const [active, setActive] = useState(1)
    const boxOne = useRef<HTMLDivElement>(null)
    const boxTwo = useRef<HTMLDivElement>(null)
    const boxThree = useRef<HTMLDivElement>(null)
   
    useEffect(() => {
        const mobileView = window.innerWidth < 768
        const interval = setInterval(() => {
         if(active === 1){
                setActive(2)
               if(mobileView){
                boxOne.current!.style.width = "15.75rem"
                boxTwo.current!.style.width = "100%"
                boxThree.current!.style.width = "15.75rem"
              
               }else{
                boxOne.current!.style.width = "15.75rem"
                boxTwo.current!.style.width = "50.875rem"
                boxThree.current!.style.width = "15.75rem"
               }
         }else if(active === 2){
                setActive(3)
                if(mobileView){
                    boxOne.current!.style.width = "15.75rem"
                    boxTwo.current!.style.width = "15.75rem"
                    boxThree.current!.style.width = "100%"
                }else{
                    boxOne.current!.style.width = "15.75rem"
                    boxTwo.current!.style.width = "15.75rem"
                    boxThree.current!.style.width = "50.875rem"
                }
         }else{
                setActive(1)
            if(mobileView){
                boxOne.current!.style.width = "100%"
                boxTwo.current!.style.width = "15.75rem"
                boxThree.current!.style.width = "15.75rem"
            }else{
                boxOne.current!.style.width = "50.875rem"
                boxTwo.current!.style.width = "15.75rem"
                boxThree.current!.style.width = "15.75rem"
            }
         }  
        }, 3000)


        return () => clearInterval(interval)
    })




  return (
    <Box
    width={["100%", "100%", "100%", "55%"]}
 display={['block', 'block', 'block', 'flex']}
 columnGap={"1.625rem"}
 alignItems="center"

 >
     <Box
     width= {["100%","50.875rem"]}
     height={["auto","31.6875rem"]}
     ref={boxOne}
     position="relative"
     zIndex="1"
    display= {[active === 1 ? "block" : "none", "block"]}
     >
         <Image height="100%" width="100%" objectFit={"cover"}   src="assets/images/home/heroImage1.png" alt="hero"  borderRadius=".8319rem"/>
        <Box
        position="absolute"
        bg="#FFFFFF"
        padding=".75rem .9181rem 2rem .6875rem"
        zIndex="3"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="15.75rem"
        display = {active === 1 ? "block" : "none"}
        borderRadius = ".8319rem"
        >
            <Text
            fontSize="1.125rem"
            fontWeight="600"
            color="#434343"
            >
                Ahmed Biola
            </Text>
            <Text
            color="#545656"
            fontSize=".75rem"
            fontWeight="400"

            >
            I got a job 3 months after graduating from schfordevs.
            </Text>
        </Box>
         

     </Box>
     <Box
   
     width={["15.75rem"]}
     height="31.6875rem"
     ref={boxTwo}
     position="relative"
     display= {[active === 2 ? "block" : "none", "block"]}
     >
         <Image height="100%" width="100%" objectFit={"cover"} src="assets/images/home/heroImage2.png" alt="hero"  objectPosition={"20% top"} borderRadius=".8319rem"/>

         <Box
        position="absolute"
        bg="#FFFFFF"
        padding=".75rem .9181rem 2rem .6875rem"
        zIndex="3"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="15.75rem"
        display = {active === 2 ? "block" : "none"}
        borderRadius = ".8319rem"
        >
            <Text
            fontSize="1.125rem"
            fontWeight="600"
            color="#434343"
            >
               Cynthia Hassan
            </Text>
            <Text
            color="#545656"
            fontSize=".75rem"
            fontWeight="400"

            >
The training was practical and fun           
 </Text>
        </Box>
     </Box>
     <Box
     width={["100%","15.75rem"]}

     height="31.6875rem"
        ref={boxThree}
        position="relative"
        display= {[active === 3 ? "block" : "none", "block"]}
     >
         <Image height="100%" width="100%" objectFit={["cover"]} src="assets/images/home/heroImage3.png" alt="hero" objectPosition={"80% top"} borderRadius=".8319rem"/>

         <Box
        position="absolute"
        bg="#FFFFFF"
        padding=".75rem .9181rem 2rem .6875rem"
        zIndex="3"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="15.75rem"
        display = {active === 3 ? "block" : "none"}
        borderRadius = ".8319rem"
        >
            <Text
            fontSize="1.125rem"
            fontWeight="600"
            color="#434343"
            >
              Kene Nwaeze
            </Text>
            <Text
            color="#545656"
            fontSize=".75rem"
            fontWeight="400"

            >
        I was able to build a solid portfolio at the end of the training
            </Text>
        </Box>
     </Box>
 </Box>
  )
}
