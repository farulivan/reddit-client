import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:param" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
