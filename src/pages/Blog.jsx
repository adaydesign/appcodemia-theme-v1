import { BreadcrumbItem } from '@chakra-ui/breadcrumb'
import { BreadcrumbLink } from '@chakra-ui/breadcrumb'
import { Breadcrumb } from '@chakra-ui/breadcrumb'
import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/layout'
import { AspectRatio } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { StackDivider } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { FaListAlt, FaBorderAll, FaAngleDoubleRight, FaCalendarAlt, FaUser, FaRegCommentDots } from 'react-icons/fa'
import blogList from '../assets/data/blog.json'

// Blog Content
const BlogContentBreadcrumb = ({ ...rest }) => {
    return (
        <Flex {...rest}>
            <Breadcrumb fontWeight="medium" fontSize="sm" spacing={2} separator={<Icon as={FaAngleDoubleRight} color="gray.500" />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">2021</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">May</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

const BlogItem = ({ data, ...rest }) => {
    return (
        <HStack spacing={8} align="start" {...rest}>
            <Box flex={1}>
                <Link href={data.link} isExternal>
                    <AspectRatio h="250px" ratio={4/3} zIndex={-1}>
                    <Image w="100%" maxH="250px" src={data.image} objectFit="fill"/>
                    </AspectRatio>
                </Link>
            </Box>
            <Box flex={1}>
                <VStack align="start" spacing={4}>
                    <Link>
                        <Text fontSize="md" fontStyle="" textTransform="uppercase">{data.category}</Text>
                    </Link>
                    <Link href={data.link} isExternal>
                        <Heading size="lg">{data.title}</Heading>
                    </Link>
                    <HStack color="gray.400" fontSize="sm">
                        <Icon as={FaCalendarAlt} />
                        <Text >{data.date}</Text>
                        <Icon as={FaUser} />
                        <Text >{data.author}</Text>
                        <Icon as={FaRegCommentDots} />
                        <Text>comments ({data.comment})</Text>
                    </HStack>
                    <Text fontSize="md" noOfLines={3}>{data.detail}</Text>
                </VStack>
            </Box>
        </HStack>
    )
}

const BlogList = ({ ...rest }) => {
    return (
        <VStack spacing={8} {...rest}>
            {
                blogList && blogList.map(data => (<BlogItem data={data} key={data.key} />))
            }
        </VStack>
    )
}

const BlogContent = () => {
    return (<>
        <Heading size="2xl" mb={4}>Blogs</Heading>
        <BlogContentBreadcrumb mb={10} />
        <BlogList />
    </>)
}

// Blog Menu
const BlogMenuTitle = ({ title, icon }) => {
    return (
        <HStack w="200px" spacing={2} mb={3}>
            <Divider flex={2} />
            <Center>
                <Heading size="sm" flex={2}>{icon} {title}</Heading>
            </Center>
            <Divider flex={2} />
        </HStack>
    )
}
const BlogMenuList = ({ list }) => {
    return (
        <VStack spacing={2} divider={<StackDivider  />} w="300px" align="start">
            {
                list && list.map(item => (
                    <Link>
                        <Text fontSize="sm" ml={2}>{item}</Text>
                    </Link>
                ))
            }
        </VStack>
    )
}
const BlogMenu = () => {
    return (
        <VStack>
            <VStack mb={10}>
                <BlogMenuTitle title="Archives" icon={<Icon as={FaListAlt} />} />
                <BlogMenuList list={["May 2021", "April 2021", "March 2021"]} />
            </VStack>
            <VStack mb={10}>
                <BlogMenuTitle title="Catagories" icon={<Icon as={FaBorderAll} />} />
                <BlogMenuList list={["golang", "flutter", "react", "javascript"]} />
            </VStack>
        </VStack>)
}

const Blog = () => {
    return (
        <Flex mt={20} mx={35} mb={20}>
            <Box flex={3} p={8}>
                <BlogContent />
            </Box>
            <Box flex={1} px={8} py={4}>
                <BlogMenu />
            </Box>
        </Flex>
    )
}

export default Blog
