import React from 'react'
import {
    Flex,
    Box,
    Text,
    Image,
    Heading
} from '@chakra-ui/react'

const Crop = (props) => {
    return(
        <Flex 
            flexDir="row"
            bg="gray.100" 
            height="100%"
            width="600px"
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
                {/* <Text fontSize="14px" fontWeight="medium">{props.desc}</Text> */}
                <Text fontSize="14px" fontWeight="medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard.</Text>
                <Text fontSize="18px" mt="5px" fontWeight="bold">Cropping Season: {props.cs}</Text>
    
            </Flex>
        </Flex>
    )
}

export default Crop;