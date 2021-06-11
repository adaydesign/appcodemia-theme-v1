import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { AspectRatio } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import img1 from '../assets/images/img1.jpg'
import iconImage1 from '../assets/images/icon-javascript.png'
import iconImage2 from '../assets/images/icon-typescript.png'
import iconImage3 from '../assets/images/icon-react.png'
import iconImage4 from '../assets/images/icon-flutter.png'
import iconImage5 from '../assets/images/icon-swift.png'
import iconImage6 from '../assets/images/icon-go.png'
import { HStack } from '@chakra-ui/layout'

const Paragraph = () =>{
    return (<Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis sagittis tellus. Suspendisse ut imperdiet magna, at tristique libero. Aliquam erat volutpat. Aliquam egestas at augue quis volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed neque urna, facilisis et volutpat vulputate, consectetur vel diam. Duis vitae luctus justo. Aliquam erat volutpat. Morbi quis arcu lectus. Aenean nec leo purus.
    </Container>)
}

const Home = () => {
    const listIcons = [iconImage1, iconImage2, iconImage3, iconImage4, iconImage5, iconImage6]

    return (
        <VStack spacing={8} mt={40} mb={20}>
            <Box>
                <Heading as="h1" size="4xl" color="blue.600">A p p c o d e m i a</Heading>
            </Box>
            <Box>
                <Text fontSize="3xl" color="facebook">app-co-de-mia dot com</Text>
            </Box>
            <Paragraph />
            <Box w="1000px" zIndex="-1">
                <AspectRatio maxW="1000px" ratio={21 / 9}>
                    <Image src={img1} alt="cover" />
                </AspectRatio>
            </Box>
            <Paragraph />
            <HStack spacing={10}>
                {
                    listIcons.map((img,i) => (
                        <Image key={`img_${i}`} src={img} alt="cover" boxSize="80px" borderRadius="24px"/>
                    ))
                }
            </HStack>
            <Paragraph />
            <Paragraph />
            <Paragraph />
        </VStack>
    )
}

export default Home
