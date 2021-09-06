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
                width="30%"
            ></Image>

            <Flex flexDir="column">
                <Text fontSize="24px" fontWeight="bold">{props.name}</Text>
                <Text fontSize="18px" mt="5px" fontWeight="bold">Cropping Season: {props.cs}</Text>




                <Flex flexDir="row" mt="10px">
                <Flex flexDir="column" alignItems="center" mr="20px">
                    <Text fontSize="12px" fontWeight="medium">TOTAL VOLUME</Text>
                    <Text fontSize="24px" fontWeight="bold">{props.totalVol} kgs</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center" mr="20px">
                    <Text fontSize="12px" fontWeight="medium">AVAILABLE VOLUME</Text>
                    <Text fontSize="24px" fontWeight="bold">{props.availVol} kgs</Text>
                </Flex>
                <Flex flexDir="column" alignItems="center">
                    <Text fontSize="12px" fontWeight="medium">CURRENT VOLUME</Text>
                    <Text fontSize="24px" fontWeight="bold">{props.currentVol} kgs</Text>
                </Flex>
            </Flex>
            </Flex>

            
        </Flex>
    )
}

export default Crop;