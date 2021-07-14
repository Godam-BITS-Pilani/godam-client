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
        
    }, []); 
    
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
        if (warehouseInfo.cumulative_storage)
        setStoragePer((warehouseInfo.cumulative_storage-warehouseInfo.cumulative_available_storage)/(warehouseInfo.cumulative_storage)*100)
    }


    return (
        <>
        {warehouseInfo ? 
        
            <Flex direction="column" margin="auto" alignItems="center" justifyContent="center" width="90vw">
                <Text color="light.primary" fontSize="12px">{JSON.stringify(warehouseInfo)}</Text>
                <Flex 
                    flexDir="row"
                    alignItems="center"
                >
                    <Image
                        src={warehouseInfo.avatar}
                        boxSize="50px"
                        borderRadius="100%"
                        mr="30px" />
                    <Text color="light.primary">Hey {warehouseInfo.name}, welcome to your Godam Dashboard!</Text>
                </Flex>  
                <Flex height="100px"><CircularProgressbar value={storagePer} text={`${storagePer}%`} />;</Flex>
                

            </Flex> : 
            <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
                <Spinner color="light.primary" />
            </Flex>}
        </>
    )
}

export default Dashboard;


