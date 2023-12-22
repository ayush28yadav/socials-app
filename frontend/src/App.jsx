import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import {Routes, Route} from 'react-router-dom';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <div>
      <Header/>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
