import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <button onClick={toggleColorMode}>Toggle Color Mode</button>
    </>
  );
}

export default App;
