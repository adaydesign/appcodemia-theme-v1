import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { FormHelperText } from '@chakra-ui/form-control'
import { FormControl } from '@chakra-ui/form-control'
import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Heading } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import { FaGlobe, FaFacebook, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const AboutDetail = ({ ...rest }) => {
    return (
        <HStack align="start" spacing={8} {...rest}>
            <Box>
                <Image src="https://picsum.photos/id/0/300" />
            </Box>
            <VStack align="start">
                <Heading size="md" color="blue.600">Appcodemia</Heading>
                <Text color="blue.400"><Icon as={FaGlobe} /> <Link>www.appcodemia.com</Link> <Icon as={FaFacebook} /> <Link>facebook page</Link></Text>
                <Text color="blue.500"><Icon as={FaEnvelope} /> <Link>hello@appcodemia.com</Link></Text>
                <Container color="gray.400">
                    In ac sem nec eros feugiat bibendum. Etiam aliquam velit id eros blandit malesuada. Praesent ac magna lectus. Curabitur viverra urna vestibulum, iaculis nulla sit amet, mollis tortor. Maecenas non consequat dui. Praesent vitae pharetra eros. Proin non justo in ante auctor congue sit amet ac turpis. Praesent pellentesque justo erat, nec porta ipsum commodo id. Praesent ac hendrerit nisl, at ornare lacus.
                </Container>
            </VStack>
        </HStack>
    )
}

const ContactForm = ({ ...rest }) => {
    return (
        <Flex w="100%" justify="center" bgColor="gray.100" {...rest} >
            <VStack width="500px">
                <Heading size="xl" mb={6}>Contact</Heading>
                <VStack w="100%" spacing={3} bgColor="white" p={12} borderRadius="xl" >
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input type="email" position="unset"/>
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" position="unset"/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Your message ..." position="unset"/>
                    </FormControl>
                    <Button leftIcon={<FaPaperPlane />} colorScheme="blue" position="unset">Send</Button>
                </VStack>
            </VStack>
        </Flex>
    )
}

const Location = ({ ...rest }) => {
    return (
        <VStack spacing={3} w="100%" {...rest}>
            <Heading size="xl">Location</Heading>
            <Text color="gray.600">1868  Plainfield Avenue, Syracuse, New York 13202</Text>
            <Flex w="100%" h="550px">
                <iframe width="100%" loading="lazy" title="demo map"
                    src="https://www.google.com/maps/embed/v1/view?zoom=12&center=40.7207,-73.7040&key=AIzaSyBxjGFEgiZKusLYl9O3TP1K2DU-yVVGQ1o"></iframe>
            </Flex>
        </VStack>
    )
}

const About = () => {
    return (
        <VStack my={20} mx={35}  spacing={12} align="center">
            <Heading size="2xl" mt={8}>About</Heading>
            <AboutDetail p={8} />
            <ContactForm p={8} />
            <Location />
        </VStack>
    )
}

export default About
