import React from 'react'
import {
    Flex,
    Box,
    Text,
    Image,
    Heading
} from '@chakra-ui/react'

const Service = (props) => {
    return(
        <Flex 
            flexDir="row"
            bg="gray.100" 
            p="10px"
            height="80px"
            width="270px"
            mr="20px"
            mt="20px"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
        >
            <Image
                boxSize="50px"
                src={props.imgUrl}
                mr="20px"
                borderRadius="10px"
            ></Image>
            <Text fontSize="24px" fontWeight="bold">{props.name}</Text>
        </Flex>
    )
}

export default Service;