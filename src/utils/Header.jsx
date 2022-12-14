import React from 'react';
import moment from 'moment';
import {
    Box,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Switch,
    Text
} from '@chakra-ui/react';
import { BiUser } from 'react-icons/bi'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';
import { decodeUser } from '../services/token/decode-user';

const Header = (props) => {
    const user = decodeUser()
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('userData')
        navigate('/login')
        navigate('/login')
        window.location.reload(false);
    }

    const { sideBarHandler, changeSidebar, setChangeSidebar } = props

    return (
        <Flex h='42px' justifyContent='space-between' pl={2} pr={2} alignItems='center' fontSize='sm' fontWeight='semibold' color='secondary'>
            <HStack>
                <Flex justifyContent='center' alignItems='center' gap={2} onClick={sideBarHandler} cursor='pointer'>
                    <SiHomeassistantcommunitystore size='20px' cursor='pointer' />
                    <Text fontSize='xs'>Date: {moment().format('MMMM DD YYYY')}</Text>
                </Flex>
                {/* <FiMenu color='#daf5ee' size='24px' cursor='pointer'/> */}
            </HStack>
            <HStack>
                <Box p={2} borderRight='1px' borderColor='primary' cursor='pointer'>
                    <Menu>
                        <MenuButton>
                            <Flex _hover={{ color: 'accent' }} alignItems='center' flexDirection='row' gap={2}>
                                {user?.fullName}
                                <Text mr='1'>
                                    <BiUser size='20px' cursor='pointer' />
                                </Text>
                            </Flex>
                        </MenuButton>
                        <MenuList>
                            <MenuItem color='black' cursor='default'>
                                {`Username: ${user && user?.userName}`}
                            </MenuItem>
                            <MenuItem closeOnSelect={false}>
                                <Box>Change sidebar
                                    <Switch size='sm' onChange={() => setChangeSidebar(!changeSidebar)} />
                                </Box>
                            </MenuItem>
                            <MenuItem _hover={{ color: 'accent' }} onClick={logout}>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </HStack>
        </Flex>
    )
}

export default Header
