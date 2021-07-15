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

import Farmer from '../../components/Farmer'


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
        // <> {farmerInfo ? 
        // <>

        //     {/* USER GREETING SECTION */}
        //     <Flex flexDirection="row" alignItems="center" mt="30px" mb="20px" justifyContent="flex-start">
        //         <Image
        //             // src={warehouseInfo.avatar}
        //             src={psrth}
        //             height="70px"
        //             width="70px"
        //             borderRadius="100%"
        //             objectFit="cover"
        //             mr="30px" />
        //         <Text 
        //             color="gray.600"
        //             fontSize="28px"
        //             fontWeight="bold"
        //         >Hey {farmerInfo.name}, welcome to your Godam Dashboard!</Text>
        //     </Flex>


        //     {/* FARMERS LIST SECTION */}
        //     <Flex flexDirection="column" justifyContent="center" mt="50px" mb="10px" alignItems="flex-start" flexWrap="wrap">
        //         <Text fontWeight="bold" ml="5px" mb="-5px"color="gray.600">ACTIVE FARMERS</Text>
        //         <Flex flexDirection="row" alignItems="center" mb="10px" justifyContent="flex-start" flexWrap="wrap">
        //             {/*  
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             <Farmer imgUrl={psrth} name="Parth Sharma" />
        //             */}
                    
        //             {farmerInfo.farmers_in_warehouse.map((farmer, id) => (
        //                 <Farmer 
        //                     imgUrl={farmer.avatat} 
        //                     name={farmer.name} 
        //                     desc={farmer.bio} 
        //                 />
        //             ))} 
                    
        //         </Flex>
        //     </Flex>
        
        // </> :
        // <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
        //     <Spinner color="dark.primary" />
        // </Flex>}
        // </>
        <>
        {JSON.stringify(farmerInfo)}
        </>
    )
}

export default FarmerScreen;


