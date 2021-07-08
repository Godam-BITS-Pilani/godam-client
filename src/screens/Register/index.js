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

import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth';

import { Link } from 'react-router-dom'

import farmer from '../../resources/img/farmer.png'


const Register = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const passwordInputRef2 = useRef();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [show2, setShow2] = useState(false)
    const handleClick2 = () => setShow2(!show2)

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const confirmedPassword = passwordInputRef2.current.value;

        if (enteredEmail && enteredPassword) {
            fetch('https://act-grants-crm.herokuapp.com/rest-auth/login/',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            email: enteredEmail,
                            username: enteredUsername,
                            password1: enteredPassword,
                            password2: confirmedPassword,
                            is_farmer: false,
                            is_warehouse_manager: true
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
                height="100%"
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
                        <FormLabel fontWeight="medium" fontSize="18px" mt="10px" color="light.primary">Email Id</FormLabel>
                        <Input type="email" ref={emailInputRef} />
                    </FormControl>

                    <FormControl color="light.primary" id="email">
                    <FormLabel fontWeight="medium" fontSize="18px" mt="10px" color="light.primary">Username</FormLabel>
                        <Input color="white" fontSize="16px" type="text" ref={usernameInputRef} />
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

                    <FormControl id="email">
                    <FormLabel fontWeight="medium" fontSize="18px" mt="10px" color="light.primary">Confirm Password</FormLabel>
                        <InputGroup size="lg">
                            <Input
                                pr="4.5rem"
                                color="light.primary"
                                type={show2 ? "text" : "password"}
                                placeholder="Confirm your password"
                                ref={passwordInputRef2}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick2}>
                                    {show2 ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <FormControl color="white" mt="10px" as="fieldset">
                        <FormLabel as="legend">Godam User Type</FormLabel>
                        <RadioGroup defaultValue="Warehouse">
                            <HStack spacing="20px">
                            <Radio isDisabled value="Farmer">Farmer</Radio>
                            <Radio value="Warehouse">Warehouse Manager</Radio>
                            </HStack>
                        </RadioGroup>
                        </FormControl>

                    <Button
                        bg="#00FF66"
                        color="grey.700"
                        onClick={submitHandler}
                        marginTop="30px"
                        padding="24px"
                        fontSize="22px"
                    >Create your Godam Account</Button>

                    <Link to="/login">
                        <Text  mt="20px" color="white">Already have an account? Login here.</Text>
                        </Link>
                    </Box>
                </Box>
            </Flex>
        </Fragment>
    )
}

export default Register;