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

import AuthContext from '../../store/auth'


const Dashboard = () => {

    const authCtx = useContext(AuthContext);
    const authToken = 'Token ' + authCtx.token;
    
    const [warehouseInfo, setWarehouseInfo] = useState(null);

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
                } else {
                    alert("ERROR RETRIEVING CONTENT.");
                }
            }))
    }

    return (
        <>
        {warehouseInfo ? 
            <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
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
                
            </Flex> : 
            <Flex direction="column" margin="auto" alignItems="center" justifyContent="center">
                <Spinner color="light.primary" />
            </Flex>}
        </>
    )
}

export default Dashboard;


