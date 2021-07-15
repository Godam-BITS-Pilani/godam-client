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
            p="20px"
            height="120px"
            width="380px"
            mr="20px"
            mt="20px"
            alignItems="center"
            justifyContent="flex-start"
            borderRadius="10px"
        >
            <Image
                boxSize="80px"
                src={props.imgUrl}
                mr="15px"
                borderRadius="10px"
            ></Image>
            <Flex flexDir="column">
                <Text fontSize="18px" fontWeight="bold">{props.name}</Text>
                <Text fontSize="14px" fontWeight="medium">{props.desc}</Text>
                <Flex flexDir="row" mt="5px" flexWrap="wrap">
                    {props.crops.map((crop, id) => (
                        <Text pr="8px" pl="8px" fontSize="12px" bg="gray.300" mr="5px" borderRadius="10px">{crop.name}</Text>
                    ))}
                </Flex>
            </Flex>
            
        </Flex>
    )
}

export default Service;