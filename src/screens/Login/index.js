import React, { 
    Fragment, 
    useState, 
    useRef, 
    useContext 
} from 'react'

import { 
    Button, 
    Flex, 
    Box,
    FormControl,
    FormLabel,
    Input,
    Text,
    Image,
    Heading,
    FormHelperText,
    InputGroup,
    InputRightElement,
    RadioGroup, Radio, HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth';


import farmer from '../../resources/img/farmer.png'


const Login = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (enteredEmail && enteredPassword) {
            fetch('https://godam-backend.herokuapp.com/api/rest-auth/login/',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            username: enteredEmail,
                            password: enteredPassword,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => 
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })
            ).then(res => {
                if(res.data.key){
                    authCtx.login(res.data.key);
                    console.log(res.data.key);
                    history.replace('/dashboard');
                } else {
                    alert("Authentication failed. Please try again.");
                }
            }))
        }
    }


    return(
        <Fragment>
            <Flex 
                margin="auto" 
                flexDir={["column","column","column","row","row"]}
                height="92vh"
                justifyContent="center" 
                alignItems="center"
            >
                <Image 
                    width="500px"
                    objectFit="cover"
                    borderRadius="20px"
                    src={farmer}
                    height="600px"
                />

                <Box 
                    width="650px"
                    padding="50px"
                    ml="20px"
                >

                    <Heading
                        fontSize="26px"
                        color="light.secondary"
                    >Join a growing community of warehouse farmers from across the globe and optimise your farming pipelines.</Heading>

                    {/* <Text
                        fontSize="18px"
                        fontWeight="normal"
                        color="light.primary"
                        mt="15px"
                        mb="15px"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex sem, consequat quis tellus et, pellentesque pretium justo. </Text> */}

                    <Box width="80%">
                    <FormControl color="light.primary" id="email">
                    <FormLabel fontWeight="medium" fontSize="18px" mt="10px" color="light.primary">Username</FormLabel>
                        <Input color="white" fontSize="16px" type="text" ref={emailInputRef} />
                    </FormControl>
        
            
                    <FormControl id="email">
                    <FormLabel fontWeight="medium" fontSize="18px" mt="10px" color="light.primary">Password</FormLabel>
                        <InputGroup size="lg">
                            <Input
                                color="light.primary"
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Enter your password"
                                ref={passwordInputRef}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick}>
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <Button
                        bg="#00FF66"
                        color="grey.700"
                        onClick={submitHandler}
                        marginTop="30px"
                        padding="24px"
                        fontSize="22px"
                    >Login to your Godam Account</Button>

                    <Link to="/register">
                        <Text mt="20px" color="white">Don't have an account? Register here.</Text>
                        </Link>
                    </Box>
                </Box>
            </Flex>
        </Fragment>
    )
}

export default Login;