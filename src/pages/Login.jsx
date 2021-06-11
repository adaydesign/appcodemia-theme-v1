import { Flex, VStack, Center, SimpleGrid } from '@chakra-ui/layout'
import {
    FormControl,
    FormLabel, HStack, Input, Spacer, Button, Divider, Text, Icon, VisuallyHidden, Heading, Link
} from "@chakra-ui/react"
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { FaFacebookSquare, FaGithub } from "react-icons/fa";

const LoginForm = () => {
    return (
        <VStack bgColor="white" p={10} w="500px" m={4} spacing={4} borderRadius={8}>
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" type="email" autoComplete="email" required />
            </FormControl>
            <FormControl id="password">
                <HStack>
                    <FormLabel>Password</FormLabel>
                    <Spacer />
                    <FormLabel color="blue.500">Forgot Password?</FormLabel>
                </HStack>
                <Input name="password" type="password" required/>
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md" w="100%">
                Sign in
            </Button>
            <Flex w="100%" align="center">
                <Divider flex={1} />
                <Center flex={1}>
                    <Text >or continue with</Text>
                </Center>
                <Divider flex={1} />
            </Flex>
            <SimpleGrid mt="6" columns={2} spacing="3" w="100%">
                <Button color="currentColor" variant="outline">
                    <VisuallyHidden>Login with Facebook</VisuallyHidden>
                    <Icon as={FaFacebookSquare} />
                </Button>
                <Button color="currentColor" variant="outline">
                    <VisuallyHidden>Login with Github</VisuallyHidden>
                    <Icon as={FaGithub} />
                </Button>
            </SimpleGrid>
        </VStack>
    )
}

const LoginTitle = () => {
    return (
        <VStack>
            <Heading size="xl">Sign in to your account</Heading>
            <Text>Don't have an account? <Link color="blue.600" to="/signup" as={ReactLink}>Start free trial</Link></Text>
        </VStack>
    )
}

const Login = () => {
    return (
        <VStack my={20} mx={35} p={10} spacing={10} bgColor="gray.100" align="center">
            <LoginTitle />
            <LoginForm />
        </VStack>
    )
}

export default Login
