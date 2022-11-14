import { useDispatch } from 'react-redux';
import { RedditIcon } from '../assets/icons';
import {
  setSelectedSubreddit,
  clearPosts,
} from '../features/Reddit/redditSlice';
import { NavLink, Link } from 'react-router-dom';

export const Sidebar = () => {
  const subreddits = [
    'Announcements',
    'Funny',
    'Gaming',
    'Music',
    'Pics',
    'Science',
    'Sports',
    'Technology',
    'NBA',
  ];

  const dispatch = useDispatch();

  const handleSubredditClick = (e) => {
    dispatch(clearPosts());
    dispatch(setSelectedSubreddit(`/r/${e.target.id.toLowerCase()}`));
  };

  return (
    <aside className="flex flex-col h-screen">
      <Link
        id="logo"
        className="flex justify-center mt-3"
        to="/"
        onClick={(e) => dispatch(setSelectedSubreddit(`/r/popular`))}
      >
        <RedditIcon alt="reddit logo" />
        <p className="text-xl font-bold">
          reddit<span className="text-orange-600">lite</span>
        </p>
      </Link>
      <div id="subreddits" className="mt-12 text-zinc-400 font-bold">
        <div className="flex flex-col gap-5">
          {subreddits.map((subreddit, index) => {
            return (
              <NavLink
                key={index}
                id={subreddit}
                to={`/${subreddit.toLowerCase()}`}
                onClick={handleSubredditClick}
                className={({ isActive }) =>
                  [
                    'border-l-4 px-6 hover:text-zinc-700 cursor-pointer border-transparent',
                    isActive ? 'border-orange-600 text-zinc-700' : null,
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {subreddit}
              </NavLink>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
