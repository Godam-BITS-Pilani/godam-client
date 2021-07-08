import React, { Fragment } from 'react'
import { Flex } from '@chakra-ui/react'
import Navbar from '../Navbar'

const Layout = (props) => {
    return (
      <Flex 
        flexDir="column" 
        padding="30px" 
        width="100vw" 
        bg="dark.primary"
        overflow="hidden"
      >
        {/* <Navbar /> */}
        <main>{props.children}</main>
      </Flex>
    );
  };
  
  export default Layout;
  