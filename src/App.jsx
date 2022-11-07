import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Sidebar from './features/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
