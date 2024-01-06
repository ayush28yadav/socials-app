import React, { useState } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import SearchCard from '../components/SearchCard';
import useShowToast from "../hooks/useShowToast";

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const showToast = useShowToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`api/users/search/${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error.message, "error");
        return;
      }

      
  
        setUsers(data);
     
    } catch (error) {
      showToast("Error", error.message, "error");
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="center" gap={2} mb={5}>
          <Input placeholder='Search for a user' onChange={(e) => setSearch(e.target.value)} />
          <Button type="submit" size="sm">
            <SearchIcon />
          </Button>
        </Flex>
      </form>

      {users.map((user) => (
        <SearchCard
          key={user._id}
          username={user.username}
          name={user.name}
          profilePic={user.profilePic}
          
        />
      ))}
    </div>
  );
};

export default SearchPage;
