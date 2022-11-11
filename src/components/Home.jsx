import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Main } from './Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/Reddit/redditSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, selectedSubreddit, error } = useSelector(
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
          <Main posts={posts} isLoading={isLoading} error={error} />
        </main>
      </div>
    </div>
  );
};
