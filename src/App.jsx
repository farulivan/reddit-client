import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts, setSelectedSubreddit } from './features/Reddit/redditSlice';

function App() {
  const dispatch = useDispatch();
  const { posts, isLoading, selectedSubreddit } = useSelector(
    (store) => store.reddit
  );

  useEffect(() => {
    dispatch(getPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  return (
    <div className="flex w-full">
      <aside className="w-1/5 p-7 z-10 shadow-xl">
        <Sidebar />
      </aside>
      <div className="w-4/5 bg-zinc-100">
        <Header />
        <main className="m-10 p-7 bg-white rounded-lg z-10 shadow-xl">
          <Home posts={posts} isLoading={isLoading} />
        </main>
      </div>
    </div>
  );
}

export default App;
