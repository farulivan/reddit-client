import redditIcon from '../../assets/redditIcon.svg';
import Subreddits from '../subreddits/subReddits';

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-slate-500 p-7 h-screen max-w-xs">
      <div id="logo" className="flex">
        <img src={redditIcon} alt="Reddit Icon" className="w-10 mr-2" />
        <p className="text-xl font-bold">
          reddit<span className="text-orange-700">lite</span>
        </p>
      </div>
      {/* <form id="search" className="mt-4">
        <input
          type="text"
          placeholder="Search"
          value=""
          aria-label="Search posts"
        />
        <button type="submit" aria-label="Search"></button>
      </form> */}
      <Subreddits />
    </aside>
  );
};

export default Sidebar;
