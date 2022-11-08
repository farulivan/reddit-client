import redditIcon from '../../assets/redditIcon.svg';
import { SubReddits } from '../Subreddits/SubReddits';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col p-7 h-screen">
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
      <SubReddits />
    </aside>
  );
};
