
import { Flex, VStack, Center, SimpleGrid } from '@chakra-ui/layout'
import {
    FormControl,
    FormLabel, Input, Button, Divider, Text, Icon, Heading, Link, Grid, GridItem, Image
} from "@chakra-ui/react"
import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Logo } from "../components/layout/AppHeader"
import { Link as ReactLink } from "react-router-dom"

const SignUpForm = () => {
    return (
        <Flex bgColor="white" p={10} w="500px" m={4} borderRadius={12} shadow="xl" direction="column">
            <SignUpTitle />
            <SimpleGrid mt={8} columns={1} spacing="3" w="100%" zIndex={0}>
                <Button colorScheme="facebook" leftIcon={<Icon as={FaFacebook} />}>
                    Login with Facebook
                </Button>
                <Button colorScheme="gray" leftIcon={<Icon as={FaGithub} />}>
                    Login with Github
                </Button>
            </SimpleGrid>
            <Flex w="100%" align="center" mt={4}>
                <Divider flex={1} />
                <Center mx={4}>
                    <Text >OR</Text>
                </Center>
                <Divider flex={1} />
            </Flex>
            <VStack spacing={3}>
                <FormControl id="name" mt={4}>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" type="text" required />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" type="email" required />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" required />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md" w="100%">
                    Create my account
                </Button>
            </VStack>
        </Flex>
    )
}

const SignUpTitle = () => {
    return (
        <Flex direction="column" align="start">
            <Logo />
            <Heading size="lg" mt={4}>Welcome to Appcodemia</Heading>
            <Text>Enter your info to get started</Text>
        </Flex>
    )
}


const RandomGridImageItem = ({count}) => {
    const listImage = []
    for(let i=0; i<count; i++){
        let grayscale = (Math.ceil(Math.random() * 10)) % 2 === 0
        listImage.push(`https://picsum.photos/200?${grayscale && 'grayscale'}&random=${i}`)
    }

    return (<>
        {
            listImage && listImage.map(item => {
                return (
                    <GridItem rowSpan={2} colSpan={2}>
                        <Image src={item} boxSize="100%" objectFit="cover" shadow="md"/>
                    </GridItem>
                )
            })
        }
    </>)
}

const GridImage = () => {
    return (
        <Grid
            w="90%"
            h="85%"
            templateRows="repeat(8, 1fr)"
            templateColumns="repeat(8, 1fr)"
            gap={4}
        >
            <RandomGridImageItem count={16}/>
        </Grid>
    )
}

const SignUp = () => {
    return (
        <Flex my={20} mx={35} p={10} spacing={10} bgColor="gray.100">
            <Flex flex={1} direction="column" align="center">
                <SignUpForm />
                <Text mt={4}>Already have an account? <Text color="blue.600" as="span"><Link to="/login" as={ReactLink}>Log in to Appcodemia</Link></Text></Text>
            </Flex>
            <Flex flex={1} align="center" justify="center">
                <GridImage />
            </Flex>
        </Flex>
    )
}

export default SignUp
