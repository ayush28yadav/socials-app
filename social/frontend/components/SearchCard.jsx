import { Avatar, Box, Flex, Text, useColorMode,  } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({name, username,profilePic}) => {
  const { colorMode } = useColorMode();

  const cardBgColor = colorMode === 'dark' ? '#202020' : 'white';
  const cardBorderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (

    <Link to ={`/${username}`}>
     <Box
      maxW="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={cardBgColor}
      borderColor={cardBorderColor}
      boxShadow="sm"
      mb={4}
    >
      <Flex p="4" alignItems="center" >
        <Avatar
          name="name"
          src={profilePic}
          size="md"
          mr={7}
          
        />
        <Box ml="3">
          <Text fontSize="xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'black'}>
            {username}
          </Text>
          <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
            {name}
          </Text>
        </Box>
      </Flex>
    </Box>
    
    </Link>
   
  );
};

export default SearchCard;
