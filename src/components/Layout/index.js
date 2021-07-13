import React, { Fragment, useContext } from 'react'
import { Flex } from '@chakra-ui/react'
import Navbar from '../Navbar'

import AuthContext from '../../store/auth'

const Layout = (props) => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

    return (
      <Flex 
        flexDir="column" 
        padding="30px" 
        width="100vw" 
        bg="dark.primary"
        overflow="hidden"
      >
        {isLoggedIn ? <Navbar /> : null}
        <main>{props.children}</main>
      </Flex>
    );
  };
  
  export default Layout;
  