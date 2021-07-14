import React, {
    Fragment,
    useContext,
    useState,
    useEffect
} from 'react'

import {
    Flex,
    Text,
    Image,
    Spinner,
    Box
  } from "@chakra-ui/react"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AuthContext from '../../store/auth'
import psrth from '../../resources/img/psrth.jpg'

import Service from '../../components/Service'
import Farmer from '../../components/Farmer'


const Dashboard = () => {

    const authCtx = useContext(AuthContext);
    const authToken = 'Token ' + authCtx.token;
    
    const [warehouseInfo, setWarehouseInfo] = useState(null);
    const [storagePer, setStoragePer] = useState(null)

    useEffect(() => {
        getWarehouseInfo();
        postData()
    }, [warehouseInfo]); 
    
    const getWarehouseInfo = () => {
        fetch('https://godam-backend.herokuapp.com/api/warehouse/detail/1/',
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
                    setWarehouseInfo(res.data);
                    postData()
                } else {
                    alert("ERROR RETRIEVING CONTENT.");
                }
            }))
    }

    function postData(){
        if (warehouseInfo)
        setStoragePer((warehouseInfo.cumulative_storage-warehouseInfo.cumulative_available_storage)/(warehouseInfo.cumulative_storage)*100)
    }


    return (
        <> {warehouseInfo ? 
        <>

            {/* USER GREETING SECTION */}
            <Flex flexDirection="row" alignItems="center" mt="30px" mb="20px" justifyContent="flex-start">
                <Image
                    // src={warehouseInfo.avatar}
                    src={psrth}
                    height="70px"
                    width="70px"
                    borderRadius="100%"
                    objectFit="cover"
                    mr="30px" />
                <Text 
                    color="gray.600"
                    fontSize="28px"
                    fontWeight="bold"
                >Hey {warehouseInfo.name}, welcome to your Godam Dashboard!</Text>
            </Flex>

            

            {/* WAREHOUSE OVERVIEW SECTION */}
            <Flex flexDirection="column" justifyContent="center" mt="30px" mb="10px" alignItems="flex-start" flexWrap="wrap">
                <Text fontWeight="bold" ml="5px" mb="-5px"color="gray.600">WAREHOUSE OVERVIEW</Text>
                <Flex flexDirection="row" alignItems="center" mb="10px" justifyContent="space-between" flexWrap="wrap">
                    <Flex 
                        flexDir="column" 
                        width="600px" 
                        mr="30px" 
                        mt="20px" 
                        bg="gray.100" 
                        p="20px" 
                        height="300px"
                        borderRadius="10px"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box bg="green" height="80%" width="100%"></Box>
                        <Flex flexDir="row" mt="20px" alignItems="center" justifyContent="space-between">
                            <Text mr="30px" fontWeight="bold" fontSize="22px" width="55%">Godam Warehouse Punjab National Highway</Text>
                            <Text width="45%">{warehouseInfo.address.formatted}</Text>
                        </Flex>
                    </Flex>
                    <Flex 
                        flexDir="column" 
                        width="300px" 
                        bg="gray.100" 
                        p="20px"  
                        mt="20px" 
                        height="300px"
                        borderRadius="10px"
                        alignItems="center"
                        justifyContent="center"
                    >   
                        <Flex height="200px">
                            <CircularProgressbar value={storagePer} text={`${storagePer}%`} />
                        </Flex>
                        <Text mt="20px" color="dark.primary">You're at full capacity!</Text>
                    </Flex>
                </Flex>
            </Flex>


            {/* SERVICES LIST SECTION */}
            <Flex flexDirection="column" justifyContent="center" mt="50px" mb="10px" alignItems="flex-start" flexWrap="wrap">
                <Text fontWeight="bold" ml="5px" mb="-5px"color="gray.600">ACTIVE SERVICES</Text>
                <Flex flexDirection="row" alignItems="center" mb="10px" justifyContent="flex-start" flexWrap="wrap">
                    <Service imgUrl={psrth} name="Parth Sharma" />
                    <Service imgUrl={psrth} name="Parth Sharma" />
                    <Service imgUrl={psrth} name="Parth Sharma" />
                    <Service imgUrl={psrth} name="Parth Sharma" />
                    <Service imgUrl={psrth} name="Parth Sharma" />
                    <Service imgUrl={psrth} name="Parth Sharma" />
                </Flex>
            </Flex>



            {/* FARMERS LIST SECTION */}
            <Flex flexDirection="column" justifyContent="center" mt="50px" mb="10px" alignItems="flex-start" flexWrap="wrap">
                <Text fontWeight="bold" ml="5px" mb="-5px"color="gray.600">ACTIVE FARMERS</Text>
                <Flex flexDirection="row" alignItems="center" mb="10px" justifyContent="flex-start" flexWrap="wrap">
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                    <Farmer imgUrl={psrth} name="Parth Sharma" />
                </Flex>
            </Flex>

        </> :
        <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
            <Spinner color="dark.primary" />
        </Flex>}
        </>
    )
}

export default Dashboard;


