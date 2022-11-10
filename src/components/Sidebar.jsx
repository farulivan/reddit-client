import { useDispatch } from 'react-redux';
import redditIcon from '../assets/redditIcon.svg';
import { setSelectedSubreddit } from '../features/Reddit/redditSlice';
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
    'EPL',
  ];

  const dispatch = useDispatch();

  const backHome = () => {
    <Navigate to="/" />;
  };

  return (
    <aside className="flex flex-col h-screen">
      <Link
        id="logo"
        className="flex justify-center mt-3"
        to="/"
        onClick={(e) => dispatch(setSelectedSubreddit(`/r/popular`))}
      >
        <img src={redditIcon} alt="Reddit Icon" className="w-10 mr-2" />
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
                to={`/${subreddit}`}
                onClick={(e) =>
                  dispatch(
                    setSelectedSubreddit(`/r/${e.target.id.toLowerCase()}`)
                  )
                }
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
