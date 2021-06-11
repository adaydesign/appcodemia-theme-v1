import { IconButton } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import activityData from '../assets/data/activity.json'
import { FaRegLightbulb, FaGlobe, FaFacebook, FaMagic, FaRocket, FaUserAstronaut, FaHamburger, FaRegBookmark } from 'react-icons/fa'
import { Center } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Badge } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Wrap } from '@chakra-ui/layout'
import { WrapItem } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'

const ActivityItem = ({ data, ...rest }) => {
    return (
        <HStack align="start" spacing={4} {...rest}>
            <VStack>
                <IconButton icon={data.icon} colorScheme={data.iconColor} isRound zIndex={-1} />
                {!data.isLastOrder && (
                    <Center height="180px">
                        <Divider orientation="vertical" />
                    </Center>
                )
                }
            </VStack>
            <VStack mt={2}>
                <Heading size="md">{data.year}</Heading>
                <Image maxW="120px" src={data.image} />
            </VStack>
            <VStack align="start" maxW="500px">
                <HStack>
                    <Heading size="md">{data.title}</Heading>
                </HStack>
                <HStack align="start">
                    <Badge colorScheme={data.type === "blog" ? "green" : "blue"} textTransform="uppercase">{data.type}</Badge>
                    <Wrap>
                        {data.tag && data.tag.map(item => (
                            <WrapItem>
                                <Badge>{item}</Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                </HStack>
                <HStack>
                    <Text fontSize="sm" color="gray.500" noOfLines={3}>{data.detail}</Text>
                </HStack>
                <HStack>
                    {data.url && (
                        <Link href={data.url} isExternal>
                            <Icon as={FaGlobe} color="red.800" />
                            <Badge colorScheme="red">Website</Badge>
                        </Link>
                    )}
                    {data.facebook && (
                        <Link href={data.facebook} isExternal>
                            <Icon as={FaFacebook} color="blue.400" />
                            <Badge colorScheme="facebook">Facebook</Badge>
                        </Link>
                    )}
                </HStack>
            </VStack>
        </HStack>
    )
}

const ActivityTimeLine = ({ ...rest }) => {
    const iconList = [<FaMagic />, <FaRocket />, <FaRegLightbulb />, <FaUserAstronaut />, <FaRegBookmark />, <FaHamburger />]
    const listItems = activityData.map((item, i) => {
        item.icon = iconList[i]
        item.iconColor = "blue"
        item.isLastOrder = i === (activityData.length - 1)
        return item
    })

    return (
        <VStack {...rest}>
            {
                listItems && listItems.map((item, i) => (<ActivityItem data={item} key={`item_${i}`} />))
            }
        </VStack>
    )
}

const Activity = () => {
    return (
        <VStack mt={20} mx={35} mb={20} p={8} spacing={12} align="center">
            <Heading size="2xl">Activity</Heading>
            <VStack spacing={12} align="start">
                <ActivityTimeLine />
            </VStack>
        </VStack>
    )
}

export default Activity
