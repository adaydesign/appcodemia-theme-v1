import { Container } from '@chakra-ui/layout'
import React from 'react'

const AppContent = ({children}) => {
    return (
        <Container p={4} maxW="100vw">
            { children }
        </Container>
    )
}

export default AppContent
