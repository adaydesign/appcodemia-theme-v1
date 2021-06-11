import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Text } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Spacer, Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import { FaDesktop, FaGlobe, FaFacebook } from 'react-icons/fa'
import { Link as ReactLink } from 'react-router-dom'

const AppFooter = () => {
    return (
        <Flex bgColor="gray.700" color="white" py={4} px={8}>
            <Box>
                <Link href="http://www.appcodemia.com">
                    <Text color="whiteAlpha.500">appcodemia.com</Text>
                </Link>
            </Box>
            <Spacer />
            <Box><Icon as={FaDesktop} mr={2} /> Demo web layout with Chakra UI</Box>
            <Spacer />
            <Box>
                <Link href="http://www.appcodemia.com">
                    <IconButton icon={<FaGlobe />} variant="ghost" size="sm" colorScheme="whiteAlpha" />
                </Link>
                <Link to="/" as={ReactLink}>
                    <IconButton icon={<FaFacebook />} variant="ghost" size="sm" colorScheme="whiteAlpha" />
                </Link>
            </Box>
        </Flex>
    )
}

export default AppFooter
