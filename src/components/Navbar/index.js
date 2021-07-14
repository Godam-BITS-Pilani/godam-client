import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Spacer,
    Image,
    Button,
    Heading
} from "@chakra-ui/react"
import { DownloadIcon } from '@chakra-ui/icons'

import actlogo from '../../resources/img/godamlogo.png'
import AuthContext from '../../store/auth';

const Navbar = () => {

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    
    const logoutHandler = () => {
        if (isLoggedIn) authCtx.logout();
    }

    return(
        <div>
            <Flex
                alignItems="center"
            >
            
                <Image 
                    boxSize={["30px", "30px", "50px", "50px", "50px"]}
                    src={actlogo}
                />
            <Link to="/">
                <Heading
                    fontSize={["20px", "20px", "24px", "32px", "32px"]}
                    paddingLeft={["0.5vw", "0.5vw", "0.5vw", "1vw", "1vw"]}
                    color="dark.primary"
                >Godam</Heading>
            </Link>
                <Spacer />
                { isLoggedIn ? 
                <>
                    <Link to="/">
                    <Heading
                        fontSize={["14px", "14px", "18px", "18px", "18px"]}
                        paddingLeft={["0.5vw", "0.5vw", "0.5vw", "1vw", "1vw"]}
                        mr="30px"
                        color="gray.600"
                    >Warehouse</Heading>
                </Link>

                    <Button
                        fontSize={["14px", "14px", "18px", "18px", "18px"]}
                        padding={["5px", "5px", "10px", "10px", "10px"]}
                        color="light.primary"
                        bg="red"
                        onClick={logoutHandler}
                    >
                        Logout
                    </Button> 
                </>: null }
            </Flex>
        </div>
    )
};

export default Navbar;