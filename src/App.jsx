import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, setSelectedSubreddit } from './features/Reddit/redditSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  // const dispatch = useDispatch();
  // const { posts, isLoading, selectedSubreddit } = useSelector(
  //   (store) => store.reddit
  // );

  // useEffect(() => {
  //   dispatch(getPosts(selectedSubreddit));
  // }, [selectedSubreddit]);

  return (
    <Router>
      <Routes>
        <Route path="/:subredditsParam" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
