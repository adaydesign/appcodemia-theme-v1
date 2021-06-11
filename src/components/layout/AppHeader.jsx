import { Button } from '@chakra-ui/button'
import { Center, HStack, Divider } from '@chakra-ui/layout'
import { Spacer, Flex, Heading } from '@chakra-ui/layout'
import { FaRegSmile, FaThLarge, FaListAlt, FaMapMarkedAlt, FaLightbulb } from "react-icons/fa"
import React from 'react'
import Icon from '@chakra-ui/icon'
import { Link, useRouteMatch } from 'react-router-dom'

export const Logo = () => {
    return (<Center>
        <HStack>
            <Icon as={FaRegSmile} w={10} h={10} color="blue.600" />
            <Link to="/">
                <Heading size="md" color="blue.600">Appcodemia</Heading>
            </Link>
        </HStack>
    </Center>)
}


const AppHeader = () => {

    return (
        <Flex w="100vw" px={8} py={4} borderBottomWidth="1px" shadow="md" position="fixed" left={0} top={0} bgColor="white" zIndex={1}>
            <Logo />
            <Spacer />
            <HStack spacing={3}>
                <Link to="/">
                    <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={FaThLarge} />} isActive={ useRouteMatch("/home") } >Home</Button>
                </Link>
                <Link to="/blog">
                    <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={FaListAlt} />} isActive={ useRouteMatch("/blog") } >Blog</Button>
                </Link>
                <Link to="/activity">
                    <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={FaMapMarkedAlt} />}  isActive={ useRouteMatch("/activity") } >Activity</Button>
                </Link>
                <Link to="/about">
                    <Button variant="ghost" colorScheme="gray" leftIcon={<Icon as={FaLightbulb} />}  isActive={ useRouteMatch("/about") } >About</Button>
                </Link>

                <Center height="40px">
                    <Divider orientation="vertical" />
                </Center>
                <Link to="/signup">
                    <Button colorScheme="whatsapp">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button colorScheme="facebook">Log in</Button>
                </Link>

            </HStack>
        </Flex>
    )
}

export default AppHeader
