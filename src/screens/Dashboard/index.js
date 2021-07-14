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
    Spinner
  } from "@chakra-ui/react"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AuthContext from '../../store/auth'


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
        <>
        {warehouseInfo ? 
            <Flex width="100%" height="100%" direction="column" margin="auto" alignItems="center">
                <Text color="dark.primary" fontSize="12px">{JSON.stringify(warehouseInfo)}</Text>
                <Flex 
                    flexDir="row"
                    alignItems="center"
                >
                    <Image
                        src={warehouseInfo.avatar}
                        boxSize="50px"
                        borderRadius="100%"
                        mr="30px" />
                    <Text color="dark.primary">Hey {warehouseInfo.name}, welcome to your Godam Dashboard!</Text>
                </Flex>  
                <Flex height="100px">
                    <Flex mr="-50px" ml="-50px" >
                    <CircularProgressbar value={storagePer} text={`${storagePer}%`} /></Flex>
                    <Text color="dark.primary">You're at full capacity!</Text>
                </Flex>

                

            </Flex> : 
            <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
                <Spinner color="dark.primary" />
            </Flex>}
        </>
    )
}

export default Dashboard;


