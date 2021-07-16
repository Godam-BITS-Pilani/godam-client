import React, {
    Fragment,
    useContext,
    useState,
    useEffect
} from 'react'

import { useParams } from "react-router-dom";

import {
    Flex,
    Text,
    Image,
    Spinner,
    Box
  } from "@chakra-ui/react"

import 'react-circular-progressbar/dist/styles.css';

import AuthContext from '../../store/auth'
import psrth from '../../resources/img/psrth.jpg'

import Crop from '../../components/Crop/Crop.js'
import Polar from '../../components/Polar'


const FarmerScreen = (props) => {

    const authCtx = useContext(AuthContext);
    const authToken = 'Token ' + authCtx.token;

    const params = useParams();
    const farmerSlug = params.farmerSlug;
    
    const [farmerInfo, setFarmerInfo] = useState(null);

    useEffect(() => {
        getFarmerInfo();
    }, []); 
    
    const getFarmerInfo = () => {
        fetch('https://godam-backend.herokuapp.com/api/crop/farmer_crop_list/'+farmerSlug,
                {   
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authToken
                    }
                }
            ).then(response => 
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })
            ).then(res => {
                if(res.data){
                    setFarmerInfo(res.data);
                } else {
                    alert("ERROR RETRIEVING CONTENT.");
                }
            }))
    }



    return (
        <> 
        {farmerInfo ?
        <>

            {/* USER GREETING SECTION */}
            <Flex flexDirection="row" alignItems="center" mt="30px" mb="20px" justifyContent="flex-start">
                <Image
                    src={farmerInfo.profile.avatar}
                    // src={psrth}
                    height="70px"
                    width="70px"
                    borderRadius="100%"
                    objectFit="cover"
                    mr="30px" />
                <Flex flexDir="column">
                    <Text 
                        color="gray.600"
                        fontSize="28px"
                        fontWeight="bold"
                    >{farmerInfo.name}</Text>
                    <Text 
                        color="gray.400"
                        mt="-5px"
                        fontSize="22px"
                        fontWeight="bold"
                    >{farmerInfo.profile.bio}</Text>

                </Flex>
            </Flex>

            <Flex flexDirection="column" width="100%" justifyContent="center" mt="50px" mb="10px" alignItems="center" flexWrap="wrap">
                <Flex width="300px"><Polar /></Flex>
            </Flex>
        
            {/* CROPS LIST SECTION */}
            <Flex flexDirection="column" justifyContent="center" mt="50px" mb="10px" alignItems="flex-start" flexWrap="wrap">
                <Text fontWeight="bold" ml="5px" mb="-5px"color="gray.600">CROPS IN STORE</Text>
                <Flex flexDirection="row" alignItems="center" mb="10px" justifyContent="flex-start" flexWrap="wrap">
                    {farmerInfo.crops.map((crop, id) => (
                        <Crop 
                            imgUrl={crop.crop.avatar} 
                            cs={crop.crop.cropping_season}
                            name={crop.crop.name} 
                            desc={crop.crop.bio} 
                        />
                    ))}
                </Flex>
            </Flex>
            
        
        
        {/* {JSON.stringify(farmerInfo)} */}
        </> :
        <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
            <Spinner color="dark.primary" />
        </Flex>
        }        
        </>
    ) 
}

export default FarmerScreen;


