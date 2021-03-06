import React from 'react'

import {
    Flex,
    Box,
    Text,
    Image,
    Heading
} from '@chakra-ui/react'

import {
	Link,
} from "react-router-dom";


const Farmer = (props) => {
    return(
        <>
        <Link to={`/farmer/${props.username}`}>
        <Flex 
            flexDir="row"
            bg="gray.100" 
            height="180px"
            width="400px"
            p="20px"
            mr="20px"
            mt="20px"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
        >
            <Image
                boxSize="120px"
                src={props.imgUrl}
                mr="20px"
                borderRadius="10px"
                width="40%"
            ></Image>

            <Flex flexDir="column">
                <Text fontSize="24px" fontWeight="bold">{props.name}</Text>
                <Text fontSize="14px" fontWeight="medium">{props.desc}</Text>
            </Flex>
        </Flex>
    </Link></>
    )
}

export default Farmer;