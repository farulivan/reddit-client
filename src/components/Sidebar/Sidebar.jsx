import redditIcon from '../../assets/redditIcon.svg';

export const Sidebar = () => {
  const subreddits = [
    'Popular',
    'Announcements',
    'Funny',
    'Gaming',
    'Music',
    'Pics',
    'Science',
    'World News',
    'Sports',
    'Technology',
    'NBA',
    ' EPL',
  ];
  return (
    <aside className="flex flex-col h-screen">
      <div id="logo" className="flex justify-center mt-3">
        <img src={redditIcon} alt="Reddit Icon" className="w-10 mr-2" />
        <p className="text-xl font-bold">
          reddit<span className="text-orange-700">lite</span>
        </p>
      </div>
      <div id="subreddits" className="mt-12 text-zinc-400 font-bold">
        <ul className="flex flex-col gap-5">
          {subreddits.map((subreddit) => {
            return (
              <li className="first:text-zinc-700 first:border-l-4 first:border-orange-500 px-6 hover:text-zinc-700 cursor-pointer">
                {subreddit}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
